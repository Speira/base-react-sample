import constants from '~utils/constants'
import { translate as t } from '~utils/functions'

const { FIELDS, STATUS } = constants

/**
 * createAlert
 * @factory
 * @param {Object} obj
 */
export function createAlert(obj = {}) {
  const { message = '', title = '', status = STATUS.DANGER } = obj
  return {
    message,
    title,
    status,
  }
}

/**
 * createUser
 * @factory
 * @return {Object}
 */
export function createUser(obj = {}) {
  return {
    [FIELDS.PASSWORD]: obj[FIELDS.PASSWORD] || '',
    [FIELDS.USERNAME]: obj[FIELDS.USERNAME] || '',
  }
}

/**
 * DefaultUser
 * @constructor
 * @param {Object} obj
 */
export function DefaultUser(obj = {}) {
  const { password, username } = obj
  this.username = username || ''
  this.password = password || ''
  this.getErrors = () => {
    const errors = []
    if (!username || username.trim() === '') errors.push(t`USERNAME_MISSING`)
    if (!password) errors.push(t`PASSWORD_MISSING`)
    if (password && password.length < 8)
      errors.push(t`PASSWORD_LACKS_CHARACTERS`)
    return errors
  }
}

/**
 * DefaultAlert
 * @constructor
 * @param {Object} obj
 */
export function DefaultAlert(obj = {}) {
  const { message, title, type } = obj
  this.message = message || ''
  this.title = title || ''
  this.type = type || 'infos'
}

/**
 * DefaultTheme
 * @constructor
 *
 * @desc :: constructor for theme
 *
 * @param {Object} obj
 *      - {Object} obj.statusColors :: colors
 *            --  {String} obj.statusColors.info color
 *            --  {String} obj.statusColors.success color
 *            --  {String} obj.statusColors.warning color
 *            --  {String} obj.statusColors.danger color
 *      - {Object} obj.writtingColors :: colors
 *            --  {String} obj.writtingColors.back color
 *            --  {String} obj.writtingColors.fore color
 *      - {Array of  6 String} obj.templateColors :: colors
 *      - {Array of  6 String} obj.fontSizes :: sizes
 *
 */
export function DefaultTheme(obj = {}) {
  const {
    statusColors = {},
    templateColors = [],
    writtingColors = {},
    fontSizes = [],
  } = obj
  this.COLORS = {
    PRIMARY: templateColors[0] || '#e7eaf6',
    SECONDARY: templateColors[1] || '#a2a8d3',
    TERTIARY: templateColors[2] || '#38598b',
    QUATERNARY: templateColors[3] || '#113f67',
    INFO: statusColors.info || '#a1eafb',
    SUCCESS: statusColors.info || '#cfee91',
    WARNING: statusColors.info || '#fcc88a',
    DANGER: statusColors.info || '#f59292',
    BACKGROUND: writtingColors.back || '#fffdfbr',
    FOREGROUND: writtingColors.fore || '#000000b3',
  }
  this.FONT_SIZES = {
    VERY_SMALL: fontSizes[0] || '8px',
    SMALL: fontSizes[1] || '12px',
    MEDIUM: fontSizes[2] || '16px',
    SEMI_BIG: fontSizes[3] || '20px',
    BIG: fontSizes[4] || '24px',
    VERY_BIG: fontSizes[5] || '28px',
  }
}
