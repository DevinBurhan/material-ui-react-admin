import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Cookies.get('isLogin');

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = Cookies.get('isLogin');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
};
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
};
