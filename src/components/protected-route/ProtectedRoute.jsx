import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Loader } from '../loader/loader';

export const ProtectedRoute = ({ children, anonymous = false }) => {
  const { user, getUserRequest } = useSelector((state) => state.auth);
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

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  anonymous: PropTypes.bool,
};

export default ProtectedRoute;
