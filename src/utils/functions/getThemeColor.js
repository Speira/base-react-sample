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
export default function getThemeColor(params) {
  const { primary, secondary, tertiary, quaternary, theme } = params
  if (primary) return theme.COLORS.PRIMARY
  if (secondary) return theme.COLORS.SECONDARY
  if (tertiary) return theme.COLORS.TERTIARY
  if (quaternary) return theme.COLORS.QUATERNARY
  return 'transparent'
}
