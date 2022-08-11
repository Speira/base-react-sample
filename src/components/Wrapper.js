import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import constants from '~utils/constants'

const { STYLED } = constants

/**
 * DomElement
 * @component
 * @desc ::: provide the right html element depending on the tag
 *           passed as parameter
 */
function DomElement(props) {
  const { tag, ...rest } = props
  let Dom = null
  if (tag === 'link') Dom = Link
  else Dom = STYLED[tag] || STYLED.div
  return <Dom {...rest} />
}
DomElement.propTypes = { tag: PropTypes.string.isRequired }

/**
 * StyledWrapper
 * @component
 */
const StyledWrapper = styled(DomElement)`
  ${({ design }) => design.base}
  @media only screen and (min-width: 601px) {
    ${({ design }) => design.sm}
  }
  @media only screen and (min-width: 768px) {
    ${({ design }) => design.md}
  }
  @media only screen and (min-width: 992px) {
    ${({ design }) => design.lg}
  }
  @media only screen and (min-width: 1200px) {
    ${({ design }) => design.xl}
  }
`
/**
 * Wrapper
 * @component
 *
 * @desc
 *    Wrapper supports media queries in the customStyle prop.
 *
 *    Style prop can have any css prop (in camelCase) plus media queries when
 *    it receives an media query object (xs, ..,lg) instead of a css
 *    string property.
 *
 *    Depending on the tag prop, it provides a corresponding HTML element
 *
 */
function Wrapper(props) {
  const { children, customStyle, tag, ...rest } = props

  const {
    xs = {},
    sm = {},
    md = {},
    lg = {},
    xl = {},
    xxl = {},
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
    xxl,
  }

  return (
    <StyledWrapper {...rest} design={design} tag={tag}>
      {children}
    </StyledWrapper>
  )
}

Wrapper.defaultProps = {
  children: undefined,
  customStyle: {
    base: {},
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
    xxl: {},
  },
  tag: 'div',
}

Wrapper.propTypes = {
  children: PropTypes.node,
  customStyle: PropTypes.shape({
    base: PropTypes.objectOf(PropTypes.string),
    xs: PropTypes.objectOf(PropTypes.string),
    sm: PropTypes.objectOf(PropTypes.string),
    md: PropTypes.objectOf(PropTypes.string),
    lg: PropTypes.objectOf(PropTypes.string),
    xl: PropTypes.objectOf(PropTypes.string),
    xxl: PropTypes.objectOf(PropTypes.string),
  }),
  tag: PropTypes.string,
}

export default Wrapper
