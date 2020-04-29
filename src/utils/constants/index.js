/**
 * constants
 * @desc ::  constants provided accross all files
 *
 */
export default {
  ALERTS: {
    DEFAULT: {
      message: '',
      title: '',
      type: 'info',
    },
    IS_MISSING: {
      message: 'Some required fields are missing',
      title: '',
      type: 'danger',
    },
    IS_INCORRECT: {
      message: 'Incorrect Ids',
      title: '',
      type: 'danger',
    },
    IS_LOADING: {
      message: 'Loading ...',
      title: '',
      type: 'info',
    },
  },
  ERRORS: {
    CLIENT: '400',
    NOT_FOUND: '404',
    SERVER: '500',
  },
  FONT_SIZES: {
    VERY_SMALL: '8px',
    SMALL: '12px',
    MEDIUM: '16px',
    SEMI_BIG: '20px',
    BIG: '24px',
    VERY_BIG: '28px',
  },
  PATHS: {
    AUTH: '/auth',
    AUTH_PROFILE: '/auth/profile',
    CONTACT: '/contact',
    FORBIDDEN: '/unauthorized',
    DEFAULT: '/',
    HOME: '/home',
    LOGIN: 'login',
  },
  STORAGE_ITEMS: {
    THEME: 'themeContextStorage',
  },
  THEMES: {
    DEFAULT: {
      COLORS: {
        PRIMARY: '#e7eaf6',
        SECONDARY: '#a2a8d3',
        TERTIARY: '#38598b',
        QUATERNARY: '#113f67',
        INFO: '#a1eafb',
        SUCCESS: '#cfee91',
        WARNING: '#fcc88a',
        DANGER: '#f59292',
        BACKGROUND: '#fffdfb',
        FOREGROUND: '#000000b3',
      },
    },
  },
};
