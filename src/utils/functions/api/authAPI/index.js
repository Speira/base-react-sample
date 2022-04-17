const fakeUser = {
  username: 'toto',
}

/**
 * fakeAuthUser
 * @param {Object} inputs
 * @param {String} inputs.username
 *
 */
export default function fakeAuthUser(inputs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputs.username === 'toto') resolve(fakeUser)
      else reject()
    }, 3000)
  })
}

/**
 * fakeCreateUser
 * @param {Object} inputs
 * @param {String} inputs.username
 *
 */
export function fakeCreateUser(inputs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputs)
    }, 3000)
  })
}

/**
 * fakeUpdateUser
 * @param {String} inputs.id
 *
 */
export function fakeUpdateUser(inputs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputs) resolve(inputs)
      else reject()
    }, 3000)
  })
}
