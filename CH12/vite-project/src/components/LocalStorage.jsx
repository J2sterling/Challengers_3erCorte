import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const user = { name: 'John Doe', email: 'john.doe@example.com' };
    login(user);
    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, { replace: true });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  const location = useLocation();

  if (!isAuthenticated) {
    localStorage.setItem('lastPath', location.pathname);
    return <Navigate to="/login" />;
  }

  return children;
};
