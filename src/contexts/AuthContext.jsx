import { createContext } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Nathan',
          email: 'nath.palatin@gmail.com',
          avatar: 'profile.png'
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
