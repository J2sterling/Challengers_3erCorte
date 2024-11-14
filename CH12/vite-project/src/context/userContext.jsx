import React, { createContext, useState } from 'react';

// Crear el contexto
export const userContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <userContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

