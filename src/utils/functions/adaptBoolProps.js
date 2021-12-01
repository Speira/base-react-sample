/**
 * adaptBoolProps
 * @function
 * @desc : change bool props to number
 * @param {Object}
 * @return {Object}
 */
export default function adaptBoolProps(params) {
  const nextParams = { ...params }
  Object.entries(params).forEach(([key, val]) => {
    if (typeof val === 'boolean') {
      nextParams[key] = val ? 1 : 0
    }
  })
  return nextParams
}
