import { translate as t } from '~utils/functions'
import constants from '~utils/constants'

const { FIELDS } = constants

/**
 * DefaultUser
 * @constructor
 *
 */
export default function DefaultUser(obj = {}) {
  this[FIELDS.USERNAME] = obj[FIELDS.USERNAME] || ''
  this[FIELDS.PASSWORD] = obj[FIELDS.PASSWORD] || ''
  this.getErrors = () => {
    const errors = []
    if (!this.username || this.username.trim() === '')
      errors.push(t`USERNAME_MISSING`)
    if (!this.password) errors.push(t`PASSWORD_MISSING`)
    if (this.password && this.password.length < 8)
      errors.push(t`PASSWORD_LACKS_CHARACTERS`)
    return errors
  }
}

/**
 * createUser
 * @desc:: a lightweight version of DefaultUser
 * @param {Object} obj
 * @return {Object}
 */
export function createUser(obj = {}) {
  return {
    [FIELDS.PASSWORD]: obj[FIELDS.PASSWORD] || '',
    [FIELDS.USERNAME]: obj[FIELDS.USERNAME] || '',
  }
}
