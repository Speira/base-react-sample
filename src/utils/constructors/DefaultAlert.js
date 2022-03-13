/**
 * DefaultAlert
 * @constructor
 * @param {Object} obj
 */
function DefaultAlert(obj = {}) {
  const { message, title, type } = obj
  this.message = message || ''
  this.title = title || ''
  this.type = type || 'infos'
}

export default DefaultAlert
