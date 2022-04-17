import constants from '~utils/constants'

const { KEYBOARD } = constants

/**
 * handleEnterPress
 * @desc: check and trigger a function if the key Enter is pressed
 * @return Function
 *
 */
export const handleEnterPress = (callback) => (keyEvent) => {
  if (keyEvent.key === KEYBOARD.KEYS.ENTER && typeof callback === 'function') {
    callback()
  }
}

/**
 * adaptBoolProps
 *
 * @desc : change bool props to number 0 or 1
 * @param {Object} params
 * @return {Object}
 */
export function adaptBoolProps(params) {
  const nextParams = { ...params }
  Object.entries(params).forEach(([key, val]) => {
    if (typeof val === 'boolean') {
      nextParams[key] = val ? 1 : 0
    }
  })
  return nextParams
}
