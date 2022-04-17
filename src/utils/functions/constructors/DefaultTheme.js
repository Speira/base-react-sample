/**
 * DefaultTheme
 * @constructor
 *
 * @desc :: constructor for theme
 *
 * @param {Object} obj
 *      - {Object} obj.statusColors :: colors
 *            --  {String} obj.statusColors.info color
 *            --  {String} obj.statusColors.success color
 *            --  {String} obj.statusColors.warning color
 *            --  {String} obj.statusColors.danger color
 *      - {Object} obj.writtingColors :: colors
 *            --  {String} obj.writtingColors.back color
 *            --  {String} obj.writtingColors.fore color
 *      - {Array of  6 String} obj.templateColors :: colors
 *      - {Array of  6 String} obj.fontSizes :: sizes
 *
 */
export default function DefaultTheme(obj = {}) {
  const {
    statusColors = {},
    templateColors = [],
    writtingColors = {},
    fontSizes = [],
  } = obj
  this.COLORS = {
    PRIMARY: templateColors[0] || '#e7eaf6',
    SECONDARY: templateColors[1] || '#a2a8d3',
    TERTIARY: templateColors[2] || '#38598b',
    QUATERNARY: templateColors[3] || '#113f67',
    INFO: statusColors.info || '#a1eafb',
    SUCCESS: statusColors.info || '#cfee91',
    WARNING: statusColors.info || '#fcc88a',
    DANGER: statusColors.info || '#f59292',
    BACKGROUND: writtingColors.back || '#fffdfbr',
    FOREGROUND: writtingColors.fore || '#000000b3',
  }
  this.FONT_SIZES = {
    VERY_SMALL: fontSizes[0] || '8px',
    SMALL: fontSizes[1] || '12px',
    MEDIUM: fontSizes[2] || '16px',
    SEMI_BIG: fontSizes[3] || '20px',
    BIG: fontSizes[4] || '24px',
    VERY_BIG: fontSizes[5] || '28px',
  }
}
