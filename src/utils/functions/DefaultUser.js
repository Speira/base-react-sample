/**
 * DefaultUser
 * @constructor
 *
 */
export default function DefaultUser(obj = {}) {
  this.username = obj.username || ''
  this.password = obj.password || ''
  this.getError = () => {
    const error = {
      username: {},
      password: {},
    }
    if (!this.username || this.username.trim() === '') {
      error.username.missing = true
    }
    if (!this.password) {
      error.password.missing = true
    }
    if (this.password && this.password.length < 8) {
      error.password.length = true
    }
    return error
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
    password: obj.password || '',
    username: obj.username || '',
  }
}
