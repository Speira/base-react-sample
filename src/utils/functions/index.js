/**
 * testFunction
 * @params {ANY} param
 */
export default function testFunction(param = null) {
  return param
}

export { default as DefaultAlert, createAlert } from './DefaultAlert'
export { default as DefaultUser, createUser } from './DefaultUser'
export { default as adaptBoolProps } from './adaptBoolProps'
export { default as checkAccess } from './checkAccess'
export { default as checkEmptyObject } from './checkEmptyObject'
export { default as getActiveKeys } from './getActiveKeys'
export { default as getStatusColor } from './getStatusColor'
export { default as getTagSize } from './getTagSize'
export { default as handleEnterPress } from './handleEnterPress'
export { default as translate } from './translate'
