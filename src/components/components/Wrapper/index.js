import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { getActiveKeys } from '~utils/functions'
import BaseWrapper from './style'

const { STATUS } = constants

/**
 * Wrapper
 * @component
 *
 * @desc
 *    Wrapper is the only component that has not limit for customization.
 *    It also supports media queries in the customStyle prop.
 *
 *    Style prop can have any css prop (in camelCase) plus media queries when
 *    it receives an media query object (xs, ..,lg) instead of a css
 *    string property.
 *
 *    Depending on the tag prop, it provides a corresponding HTML element
 *
 */
function Wrapper(props) {
  const {
    children,
    className: initialClassName,
    customStyle,
    onKeyPress,
    primary,
    quaternary,
    secondary,
    style,
    tag,
    tertiary,
    ...rest
  } = props

  const {
    xs = {},
    sm = {},
    md = {},
    lg = {},
    xl = {},
    base = {},
    ...restCustomStyle
  } = customStyle

  const design = {
    base: { ...restCustomStyle, ...base },
    xs,
    sm,
    md,
    lg,
    xl,
  }

  const className = `${initialClassName} ${getActiveKeys({
    primary,
    secondary,
    tertiary,
    quaternary,
  })}`

  const eventHandlers = {}
  if (typeof onKeyPress === 'function') eventHandlers.onKeyPress = onKeyPress

  return (
    <BaseWrapper
      {...rest}
      {...eventHandlers}
      className={className}
      design={design}
      style={style}
      tag={tag}>
      {children}
    </BaseWrapper>
  )
}

Wrapper.defaultProps = {
  children: undefined,
  className: '',
  customStyle: {
    base: {},
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  },
  onKeyPress: null,
  primary: false,
  quaternary: false,
  secondary: false,
  status: '',
  style: {},
  tag: 'div',
  tertiary: false,
}

Wrapper.propTypes = {
  /** node */
  children: PropTypes.node,
  /** HTML class */
  className: PropTypes.string,
  /**
   * customStyle:
   *    Style for the component including media queries,
   *    - style.default must be filled, then the style.default is overwritten
   *    by the xs, sm, md, lg or xl when the media width matches the
   *    corresponding value..
   *    ex:
   *      style={{
   *        display: 'flex',
   *        justifyContent: 'center',
   *        margin: '2em',
   *        xs:{
   *          display: 'grid',
   *          gridTemplateRows: '1fr 1fr',
   *          margin: '0',
   *        }
   *      }}
   */
  customStyle: PropTypes.shape({
    base: PropTypes.objectOf(PropTypes.string),
    xs: PropTypes.objectOf(PropTypes.string),
    sm: PropTypes.objectOf(PropTypes.string),
    md: PropTypes.objectOf(PropTypes.string),
    lg: PropTypes.objectOf(PropTypes.string),
    xl: PropTypes.objectOf(PropTypes.string),
  }),
  onKeyPress: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** primary: theme static color (background) */
  primary: PropTypes.bool,
  /** quaternary: theme static color (background) */
  quaternary: PropTypes.bool,
  /** secondary: theme static color (background) */
  secondary: PropTypes.bool,
  /** status: theme dynamic color (background), it overwrittes theme static
   * color if indicated
   */
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  style: PropTypes.objectOf(PropTypes.string),
  /** tag: HMTL tag, call the right html element, default is div */
  tag: PropTypes.string,
  /** tertiary: theme static color (background) */
  tertiary: PropTypes.bool,
}

export default Wrapper
