import { createContext, useContext, useMemo, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { lightTheme, darkTheme } from '@/styles/theme';
import { useLocalStorage } from '@/hooks/use-localstorage';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [themeObject, setThemeObject] = useState(theme === 'dark' ? lightTheme : darkTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setThemeObject((prev) => (prev === darkTheme ? lightTheme : darkTheme));
  };

  const contextValue = useMemo(() => ({ themeObject, toggleTheme }), [theme]);

  return (
    <ChakraProvider theme={themeObject}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}
