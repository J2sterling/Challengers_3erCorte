import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

const AppRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));  // Guardamos datos del usuario
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user');  // Eliminamos datos del usuario
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage logout={logout} isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<LoginPage login={login} isAuthenticated={isAuthenticated} />} />
        <Route path="/profile" element={isAuthenticated ? <ProfilePage logout={logout} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;


