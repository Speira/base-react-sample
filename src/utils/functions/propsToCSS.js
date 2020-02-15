/**
 * propsToCSS
 *
 * @params {Object} props
 * @params {String} type (enum : 'active', 'hover', 'disabled' or undefined)
 * @return String
 * @desc ::
 *  Return a props adapted css litteral string for Styled Components,
 *
 */
export default function(props, type) {
  const target = type ? props[type] : props;
  const properties = Object.entries(target || {}).filter(
    ([property, value]) => property && typeof value === 'string',
  );
  return `${properties
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n')}`;
}
