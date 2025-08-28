import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={`/login/${requiredRole.toLowerCase()}`} replace />;
  }

  if (role !== requiredRole) {
    return <Navigate to={`/dashboard/${role.toLowerCase()}`} replace />;
  }

  return children;
};

export default ProtectedRoute;