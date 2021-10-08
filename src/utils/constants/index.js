import themes from './themes'

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
    CATEGORY: '/category',
  },
  STORAGE_ITEMS: {
    THEME: 'themeContextStorage',
  },
  THEMES: {
    ...themes,
  },
}
