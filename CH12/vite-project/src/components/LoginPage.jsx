import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData = { name: 'John Doe', email: email };  // Simulamos datos del usuario
    login(userData);  // Llamamos la función login desde AppRoute

    const lastPath = localStorage.getItem('lastPath') || '/profile';  // Recupera la última ruta o va al perfil
    navigate(lastPath);  // Redirige al perfil o última página
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;  // Si ya está autenticado, redirige al home
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

