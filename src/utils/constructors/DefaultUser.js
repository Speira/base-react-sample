import { translate as t } from '~utils/functions'

/**
 * DefaultUser
 * @constructor
 * @param {Object} obj
 */
function DefaultUser(obj = {}) {
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

export default DefaultUser
