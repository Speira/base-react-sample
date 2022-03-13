import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'
import constants from '~utils/constants'

const { HTML_WRAPPER_TAGS } = constants
const { ARTICLE, ASIDE, SECTION, NAV } = HTML_WRAPPER_TAGS

/**
 * HTMLBaseWrapper
 * @component
 * @desc ::: provide the right html element depending on the tag
 *           passed as parameter
 *
 */
function HTMLBaseWrapper(props) {
  const { tag, staticContext, ...rest } = props
  let HTMLComponent = (p) => <div {...p} />
  if (tag === ARTICLE) HTMLComponent = (p) => <article {...p} />
  if (tag === ASIDE) HTMLComponent = (p) => <aside {...p} />
  if (tag === SECTION) HTMLComponent = (p) => <section {...p} />
  if (tag === NAV) HTMLComponent = (p) => <nav {...p} />
  return <HTMLComponent {...rest} />
}
HTMLBaseWrapper.defaultProps = { tag: '' }
HTMLBaseWrapper.propTypes = {
  tag: PropTypes.oneOf(Object.values(HTML_WRAPPER_TAGS)),
}

/**
 * BaseWrapper
 * @component
 *
 */
const BaseWrapper = styled(HTMLBaseWrapper).attrs((props) => {
  const { design, status, theme } = props
  const style = { ...design.realtime }
  if (status) {
    style.backgroundColor =
      getStatusColor({ theme, status, alpha: 0.2 }) || 'transparent'
  }
  return { style }
})`
  ${({ design }) => design.base}
  &.primary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
  &.secondary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  }
  &.tertiary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
  }
  &.quaternary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    ${({ design }) => design.xs}
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 601px) {
    ${({ design }) => design.sm}
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    ${({ design }) => design.md}
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    ${({ design }) => design.lg}
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    ${({ design }) => design.xl}
  }
`

export default BaseWrapper
