import constants from '~utils/constants'

const { KEYBOARD } = constants

/**
 * handleEnterPress
 * @desc: check and trigger a function if the key Enter is pressed
 * @return Function
 *
 */
export default function handleEnterPress(callback) {
  return (keyEvent) => {
    if (
      keyEvent.key === KEYBOARD.KEYS.ENTER &&
      typeof callback === 'function'
    ) {
      callback()
    }
  }
}
