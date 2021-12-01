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
    SECTION: 'section',
    NAV: 'nav',
  },
  PATHS: {
    AUTH: '/auth',
    AUTH_PROFILE: '/auth/profile',
    AUTH_LOGIN: '/auth/login',
    AUTH_SIGNUP: '/auth/signup',
    CONTACT: '/contact',
    FORBIDDEN: '/unauthorized',
    DEFAULT: '/',
    HOME: '/home',
    CATEGORY: '/category',
  },
  STATUS: {
    INFO: 'info',
    DANGER: 'danger',
    SUCCESS: 'success',
    WARNING: 'warning',
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
        INFO: '#035397',
        SUCCESS: '#1C7947',
        WARNING: '#C36A2D',
        DANGER: '#A9333A',
        BACKGROUND: '#fffdfbr',
        FOREGROUND: '#000000b3',
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
  WORDS: {
    FRENCH: {
      NAME: 'FRENCH',
      VALUES: {
        AUTH: 'Authentification',
        AUTH_FAILED: 'Identifiants incorrects',
        AUTH_ONGOING: 'Authentification en cours',
        BACK: 'Retour',
        CANCEL: 'Annuler',
        EDIT: 'Éditer',
        ERROR_403: "Erreur 403: Droit d'accès insufissant !",
        ERROR_404: 'Erreur 404: Page demandée introuvable !',
        ERROR_404_MESSAGE: "Cette page n'existe pas.",
        ERROR_500: 'Erreur 500: Erreur serveur !',
        ERROR_500_MESSAGE: "Merci de contacter l'administrateur du site.",
        FIELDS_MISSING: 'Des champs sont manquants',
        FIELDS_INCORRECT: 'Des champs sont incorrects',
        HAVE_ACCOUNT: "J'ai déjà un compte",
        HAVE_NO_ACCOUNT: "Je n'ai pas de compte",
        HOME: 'Accueil',
        LOGIN: 'Connexion',
        PASSWORD: 'Mot de passe',
        PROFILE: 'Mon profile',
        SIGNUP: 'Création de compte',
        SIGNUP_MAIL_SENT: 'Demande de création de compte envoyée',
        SIGNUP_MAIL_WILL_BE_SENT: ({ username }) =>
          `Un email sera envoyé à ${username} pour finaliser l'inscription`,
        SIGNUP_ONGOING: 'Création de compte en cours',
        USERNAME: "Nom d'utilisateur",
        VALIDATE: 'Valider',
      },
    },
    ENGLISH: {
      NAME: 'ENGLISH',
      VALUES: {},
    },
  },
}
