import fakeAuthUser, { fakeCreateUser, fakeUpdateUser } from './authAPI'

/**
 * authUserAPI
 * @desc ::: Function used to authenticate an User
 * @params {Object} inputs
 * @params {String} inputs.username
 * @params {String} inputs.password
 */
export const authUserAPI = (inputs) => fakeAuthUser(inputs)

/**
 * createUserAPI
 * @desc ::: Function used to create a new User
 * @params {Object} inputs
 * @params {String} inputs.username
 * @params {String} inputs.password
 */
export const createUserAPI = (inputs) => fakeCreateUser(inputs)

/**
 * authUserAPI
 * @desc ::: Function used to update an existing User
 * @params {Object} inputs
 * @params {String} inputs.username
 * @params {String} inputs.password
 */
export const updateUserAPI = (inputs) => fakeUpdateUser(inputs)
