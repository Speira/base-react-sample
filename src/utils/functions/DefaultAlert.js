import constants from '~utils/constants'

const { STATUS } = constants

/**
 * DefaultAlert
 * @constructor
 * @param {Object} obj
 */
export default function DefaultAlert(obj = {}) {
  const { message, title, type } = obj
  this.message = message || ''
  this.title = title || ''
  this.type = type || 'infos'
}

/**
 * createAlert
 * @desc ::: a lightweight version of DefaultAlert
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
