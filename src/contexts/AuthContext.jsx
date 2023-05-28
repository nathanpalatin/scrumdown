import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Lógica de autenticação aqui...
    
    if (username === 'nath.palatin' && password === 'senha123') {
      setUser({
        id: '1',
        name: 'Nathan',
        email: 'nath.palatin@gmail.com',
        avatar: 'profile.png'
      });
    }
  };

  const logout = () => {
    // Lógica de logout aqui...
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
