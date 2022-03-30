import I18N_FRENCH from './i18n/french.json'

/**
 * constants
 * @desc ::  constants provided accross all files
 *
 */
export default {
  ERRORS: {
    CLIENT: '400',
    NOT_FOUND: '404',
    SERVER: '500',
  },
  FIELDS: {
    USERNAME: 'username',
    PASSWORD: 'password',
  },
  FIELD_TYPES: {
    CHECKBOX: 'checkbox',
    NUMBER: 'number',
    PASSWORD: 'password',
    TEXT: 'text',
  },
  FONT_SIZES: {
    VERY_SMALL: '8px',
    SMALL: '12px',
    MEDIUM: '16px',
    SEMI_BIG: '20px',
    BIG: '24px',
    VERY_BIG: '28px',
  },
  HTML_WRAPPER_TAGS: {
    ARTICLE: 'article',
    ASIDE: 'aside',
    DIV: 'div',
    FORM: 'form',
    SECTION: 'section',
    NAV: 'nav',
  },
  KEYBOARD: {
    KEYS: {
      ENTER: 'Enter',
    },
  },
  PATHS: {
    AUTH: '/auth',
    AUTH_LOGIN: '/auth/login',
    AUTH_PROFILE: '/auth/profile',
    AUTH_SIGNUP: '/auth/signup',
    CATEGORY: '/category',
    CONTACT: '/contact',
    DEFAULT: '/',
    FORBIDDEN: '/unauthorized',
    HOME: '/home',
  },
  RESTRICTIONS: {
    AUTHENTICATED: 'authenticated',
  },
  STATUS: {
    INFO: 'info',
    DANGER: 'danger',
    SUCCESS: 'success',
    WARNING: 'warning',
  },
  STORAGE_ITEMS: {
    LANGUAGE: 'languageContextStorage',
    THEME: 'themeContextStorage',
  },
  THEMES: {
    DEFAULT: {
      COLORS: {
        STATIC: {
          PRIMARY: '#F4FCD9',
          SECONDARY: '#C5D8A4',
          TERTIARY: '#BB9981',
          QUATERNARY: '#534340',
          LIGHT: '#f8f8fa',
          DARK: '#000000b3',
        },
        DYNAMIC: {
          INFO: '#035397',
          SUCCESS: '#1C7947',
          WARNING: '#C36A2D',
          DANGER: '#A9333A',
        },
      },
      FONT_SIZES: {
        VERY_SMALL: '8px',
        SMALL: '12px',
        MEDIUM: '16px',
        SEMI_BIG: '20px',
        BIG: '24px',
        VERY_BIG: '28px',
      },
    },
  },
  TEXT_COLORS: {
    blue: 'blue',
    black: 'black',
    green: 'green',
    red: 'red',
  },
  WORDS: {
    FRENCH: {
      NAME: 'FRENCH',
      VALUES: I18N_FRENCH,
    },
    ENGLISH: {
      NAME: 'ENGLISH',
      VALUES: {},
    },
  },
}
