/**
 * DefaultUser
 * @constructor
 * @param {Object} obj
 */
function DefaultUser(obj = {}) {
  const { password, username } = obj
  this.username = username || ''
  this.password = password || ''
}

export default DefaultUser
