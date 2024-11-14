import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css'
import AppRoute from './components/AppRoute';  
import { UserProvider } from './context/userContext'; 

// Renderiza la aplicación
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {}
    <UserProvider>
      <AppRoute />
    </UserProvider>
  </React.StrictMode>,
);
