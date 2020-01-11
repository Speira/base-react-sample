import React from 'react';
import constants from '~utils/constants';

const ThemeContext = React.createContext();
const themes = constants.THEMES;
const STORAGE_ITEM = constants.STORAGE_ITEMS.THEME;
const defaultTheme = Object.values(themes)[0];
const defaultThemeKey = Object.keys(themes)[0];

/**
 * ThemeProvider
 * @component
 * @context
 *
 */
function ThemeProvider(props) {
  const loadedThemeKey = localStorage.getItem(STORAGE_ITEM);
  const loadedTheme = loadedThemeKey && themes[loadedThemeKey];
  const [theme, setTheme] = React.useState(loadedTheme || defaultTheme);
  const value = {
    colors: theme.COLORS,
    switchToDefault() {
      setTheme(defaultTheme);
      localStorage.setItem(STORAGE_ITEM, defaultThemeKey);
    },
  };

  return <ThemeContext.Provider {...props} value={value} />;
}

/**
 * useTheme
 * @return context
 *
 */
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext must be called in ThemeProvider');
  return context;
};

export default ThemeProvider;
