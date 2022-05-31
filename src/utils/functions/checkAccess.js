import constants from '~utils/constants'

const { RESTRICTIONS } = constants

/**
 * checkAccess.
 *
 * @param {Object} param
 * @param {string} param.restricted
 * @param {Object} param.user
 */
export default function checkAccess({ restricted, user }) {
  if (!user) return false
  if (restricted === RESTRICTIONS.AUTHENTICATED) return !!user.username
  return false
}
