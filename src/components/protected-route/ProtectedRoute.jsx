import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Loader } from '../loader/loader';

export const ProtectedRoute = ({ element }) => {
  const { user, getUserRequest } = useSelector((state) => state.auth);

  const location = useLocation();

  if (getUserRequest) {
    return <Loader size={'large'} />;
  }

  return user ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
