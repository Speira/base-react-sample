import constants from '~utils/constants'

const { STATUS } = constants

/**
 * getStatusColor
 * @desc ::: return the color corresponding to the status
 *           We can add the additional option {Float} "alpha" [0-1] to apply
 *           some transparency effect
 * @param {Object} param
 * @param {Object} param.theme
 * @param {String} param.status
 * @param {String | Number | undefined} param.alpha | transparency between 0 and 1
 *
 * @return String
 *
 */
export function getStatusColor({ theme, status, alpha }) {
  if (!theme || typeof theme !== 'object') return ''
  if (!status || typeof status !== 'string') return ''
  const ref = Object.values(STATUS).includes(status) ? status : STATUS.INFO
  const color = theme.COLORS.DYNAMIC[ref.toUpperCase()]
  const alphaFloat = parseFloat(alpha, 10)
  if (Number.isNaN(alphaFloat) || alphaFloat > 1 || alphaFloat < 0) return color
  const opacity = Math.ceil(alphaFloat * 255).toString(16)
  if (color.startsWith('#')) {
    const hexaColor = color.slice(1)
    if (hexaColor.length === 6) return `#${hexaColor}${opacity}`
    if (hexaColor.length === 8) return `#${hexaColor.slice(0, 6)}${opacity}`
    if (hexaColor.length === 3)
      return `#${hexaColor
        .split('')
        .reduce((acc, cur) => `${acc}${cur}${cur}`, '')}${opacity}`
    return color
  }
  if (color.toLowerCase().startsWith('rgb')) {
    return color.replace(')', `, ${alphaFloat})`)
  }
  return color
}

/**
 * getThemeColor
 * @function
 * @desc :: return color corresponding to the theme value
 * @param {Object} params
 *        {number} params.primary
 *        {number} params.secondary
 *        {number} params.tertiary
 *        {number} params.quaternary
 *        {Object} theme | the current theme set in ThemeContext
 * @return String | the color corresponding to the theme selected
 *
 */
export function getThemeColor(params) {
  const { primary, secondary, tertiary, quaternary, theme } = params
  if (primary) return theme.COLORS.STATIC.PRIMARY
  if (secondary) return theme.COLORS.STATIC.SECONDARY
  if (tertiary) return theme.COLORS.STATIC.TERTIARY
  if (quaternary) return theme.COLORS.STATIC.QUATERNARY
  return 'transparent'
}
