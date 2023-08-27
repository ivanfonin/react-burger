import { useSelector } from '../../services/hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader } from '../loader/loader';
import { FunctionComponent, ReactElement } from 'react';
import {
  getUser,
  getUserRequest as getUserRequestProgress,
} from '../../utils/storeHelpers';

interface IProtectedRoute {
  children: ReactElement;
  anonymous?: boolean;
}

export const ProtectedRoute: FunctionComponent<IProtectedRoute> = ({
  children,
  anonymous = false,
}) => {
  const { user } = useSelector(getUser);
  const { getUserRequest } = useSelector(getUserRequestProgress);
  const location = useLocation();
  const from = location.state?.from || '/';

  if (getUserRequest) {
    return <Loader size={'large'} />;
  }

  if (anonymous && user) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;