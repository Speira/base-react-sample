import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import constants from '~utils/constants';

const ThemeContext = React.createContext();
const themes = constants.THEMES;
const STORAGE_ITEM = constants.STORAGE_ITEMS.THEME;
const defaultTheme = Object.values(themes)[0];
const defaultThemeKey = Object.keys(themes)[0];

export const colorsThemesList = Object.keys(
  constants.THEMES.DEFAULT.COLORS,
).map((color) => color.toLowerCase());

/**
 * ThemeProvider
 * @component
 * @context
 * @desc use localStorage to persist theme key, and StyledThemeProvider
 * provide this theme (@see THEMES in src/utils/constants) as props for all
 * styled components
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
  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider {...props} value={value} />
    </StyledThemeProvider>
  );
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
