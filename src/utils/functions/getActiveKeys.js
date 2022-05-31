/**
 * getActiveKeys
 * @desc :: turn all the keys in an object that are not null|empty in a single
 *          concatened string
 * @param {Object} param
 * @return {String}
 */
export default function getActiveKeys(object) {
  if (typeof object !== 'object') return ''
  return Object.entries(object).reduce((acc, cur) => {
    const [key, val] = cur
    if (!val) return acc
    return acc.concat(` ${key}`)
  }, '')
}
