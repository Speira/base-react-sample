/**
 * createUser
 * @factory
 * @return {Object}
 */
function createUser(obj = {}) {
  const { password = '', username = '' } = obj
  return {
    password,
    username,
  }
}

export default createUser
