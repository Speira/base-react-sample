import constants from '~utils/constants'

const { USERNAME, PASSWORD } = constants.FIELDS

/**
 * createUser
 * @factory
 * @return {Object}
 */
function createUser(obj = {}) {
  return {
    [PASSWORD]: obj[PASSWORD] || '',
    [USERNAME]: obj[USERNAME] || '',
  }
}

export default createUser
