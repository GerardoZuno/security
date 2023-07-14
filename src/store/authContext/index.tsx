import React, {createContext, useState, useEffect} from 'react';
import {isLoggedIn, onLogout} from '../../sdk/auth';

const defaultValue = {
  isLogged: false,
  login: () => {},
  logout: () => {},
  checkLogged: () => {},
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({children}: any) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    checkLogged();
  }, []);

  const checkLogged = async () => {
    const result = await isLoggedIn();
    console.log('result: ', result);
    setIsLogged(result);
  };

  const login = async () => {
    setIsLogged(true);
  };

  const logout = async () => {
    await onLogout();
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{isLogged, login, logout, checkLogged}}>
      {children}
    </AuthContext.Provider>
  );
};
