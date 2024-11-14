import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    localStorage.setItem('lastPath', location.pathname);  // Guarda la última ruta
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;



