/**
 * getActiveKeys
 * @desc :: get the keys that are not null|empty in a single
 *          concatened string
 * @param {Object} param
 * @return {String}
 */
function getActiveKeys(object) {
  if (typeof object !== 'object') return ''
  return Object.entries(object).reduce((acc, cur) => {
    const [key, val] = cur
    if (!val) return acc
    return acc.concat(` ${key}`)
  }, '')
}

export default getActiveKeys
