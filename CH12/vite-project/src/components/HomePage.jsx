import { Link } from 'react-router-dom';

const HomePage = ({ logout, isAuthenticated }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to access more features.</p>
          <Link to="/login">
            <button>Login</button>  {/* Asegúrate de que el botón esté dentro del Link */}
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;



