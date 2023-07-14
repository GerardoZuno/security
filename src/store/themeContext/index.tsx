import React, {createContext, useState, useEffect} from 'react';
import {getThemes} from '../../sdk/panic';

const defaultValue = {
  theme: {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState<any>();

  useEffect(() => {
    fetchTheme();
  }, []);

  console.log('theme', theme);

  const fetchTheme = async () => {
    const response = await getThemes();
    setTheme(response);
  };

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};
