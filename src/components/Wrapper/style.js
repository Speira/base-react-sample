import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'
import constants from '~utils/constants'

const { HTML_WRAPPER_TAGS } = constants
const { ARTICLE, ASIDE, FORM, NAV, SECTION } = HTML_WRAPPER_TAGS

const Article = styled.article``
const Aside = styled.aside``
const Div = styled.div``
const Form = styled.form``
const Nav = styled.nav``
const Section = styled.section``

/**
 * DomElement
 * @component
 * @desc ::: provide the right html element depending on the tag
 *           passed as parameter
 *
 */
function DomElement(props) {
  const { tag, ...rest } = props
  let Wrapper = Div
  if (tag === ARTICLE) Wrapper = Article
  if (tag === ASIDE) Wrapper = Aside
  if (tag === FORM) Wrapper = Form
  if (tag === NAV) Wrapper = Nav
  if (tag === SECTION) Wrapper = Section
  return <Wrapper {...rest} />
}
DomElement.defaultProps = { tag: '' }
DomElement.propTypes = {
  tag: PropTypes.oneOf(Object.values(HTML_WRAPPER_TAGS)),
}

/**
 * BaseWrapper
 * @component
 *
 */
const BaseWrapper = styled(DomElement).attrs((props) => {
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
