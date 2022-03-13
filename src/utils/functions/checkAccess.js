import constants from '~utils/constants'

const { RESTRICTIONS } = constants
const { AUTHENTICATED } = RESTRICTIONS

/**
 * checkAccess.
 *
 * @param {Object} param
 * @param {string} param.restricted
 * @param {Object} param.user
 */
function checkAccess({ restricted, user }) {
  if (restricted === AUTHENTICATED) return !!user.username
  return false
}

export default checkAccess
