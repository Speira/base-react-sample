/**
 * lightenColor
 * @desc ::: return the color corresponding to the status
 *           We can add the additional option {Float} "alpha" [0-1] to apply
 *           some transparency effect
 * @param {String} color
 * @param {String} alpha | the transparency
 *
 * @return String
 *
 */
export default function lightenColor(color, alpha) {
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
