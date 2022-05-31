/**
 * adaptBoolProps
 *
 * @desc : change bool props to number 0 or 1
 * @param {Object} params
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
