/**
 * getActiveKeys
 * @desc :: turn all the keys in an object that are not null|empty in a single
 *          concatened string
 * @param {Object} param
 * @return {String}
 */
export function getActiveKeys(object) {
  if (typeof object !== 'object') return ''
  return Object.entries(object).reduce((acc, cur) => {
    const [key, val] = cur
    if (!val) return acc
    return acc.concat(` ${key}`)
  }, '')
}

/**
 * checkEmptyObject.
 *
 * @param {} object
 */
export function checkEmptyObject(object) {
  if (!(object instanceof Object)) return false
  return !!Object.values(object).length
}
