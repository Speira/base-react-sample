import constants from '~utils/constants'

const { DANGER } = constants.STATUS
/**
 * createAlert
 * @factory
 * @param {Object} obj
 */
function createAlert(obj = {}) {
  const { message = '', title = '', status = DANGER } = obj
  return {
    message,
    title,
    status,
  }
}

export default createAlert
