import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: { textColor: '#000000', backgroundColor: '#ffffff' },
  dark: { textColor: '#ffffff', backgroundColor: '#000000' },
  blue: { textColor: '#6CB4EE', backgroundColor: '#6CB4EE' },
  green: { textColor: '#4CBB17', backgroundColor: '#4CBB17' },
  purple: { textColor: '#6200EE', backgroundColor: '#6200EE' },
  pink: { textColor: '#FF69B4', backgroundColor: '#FF69B4' },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const updateTheme = (newTheme) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
