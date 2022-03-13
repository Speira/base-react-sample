import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { getActiveKeys } from '~utils/functions'
import BaseWrapper from './style'

const { HTML_WRAPPER_TAGS, STATUS } = constants

/**
 * Wrapper
 * @component
 * @desc
 *    Wrapper is the only component that has not limit for customization.
 *    It also support media queries throught the use of xs,sm,..., keys in its
 *    style props
 */
function Wrapper(props) {
  const {
    children,
    className: initialClassName,
    primary,
    quaternary,
    secondary,
    style: initialStyle,
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
    realtime = {},
    ...restStyle
  } = initialStyle

  const design = {
    base: { ...restStyle, ...base },
    realtime,
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

  return (
    <BaseWrapper {...rest} className={className} design={design} tag={tag}>
      {children}
    </BaseWrapper>
  )
}

Wrapper.defaultProps = {
  children: undefined,
  className: '',
  primary: false,
  quaternary: false,
  secondary: false,
  status: '',
  style: { default: {}, realtime: {}, xs: {}, sm: {}, md: {}, lg: {}, xl: {} },
  tag: HTML_WRAPPER_TAGS.DIV,
  tertiary: false,
}

Wrapper.propTypes = {
  /** node */
  children: PropTypes.node,
  /** HTML class */
  className: PropTypes.string,
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
  /**
   * style:
   *    Style for the component including media queries,
   *    - style.default must be filled, then the style.default is overwritten
   *    by the xs, sm, md, lg or xl when the media width matches the
   *    corresponding value..
   *
   *    - style.realtime is an inline style, it is used for performance when
   *      a css data changes often.
   */
  style: PropTypes.shape({
    base: PropTypes.objectOf(PropTypes.string),
    realtime: PropTypes.objectOf(PropTypes.string),
    xs: PropTypes.objectOf(PropTypes.string),
    sm: PropTypes.objectOf(PropTypes.string),
    md: PropTypes.objectOf(PropTypes.string),
    lg: PropTypes.objectOf(PropTypes.string),
    xl: PropTypes.objectOf(PropTypes.string),
  }),
  /** tag: HMTL tag, call the right html element, default is div */
  tag: PropTypes.oneOf(Object.values(HTML_WRAPPER_TAGS)),
  /** tertiary: theme static color (background) */
  tertiary: PropTypes.bool,
}

export default Wrapper
