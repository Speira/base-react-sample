import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import constants from '~utils/constants'

const { STYLED } = constants

/**
 * DomElement
 * @component
 * @desc ::: provide the right html element depending on the tag
 *           passed as parameter
 *
 */
function DomElement(props) {
  const { tag, ...rest } = props
  const Wrapper = STYLED[tag] || STYLED.div
  return <Wrapper {...rest} />
}
DomElement.propTypes = { tag: PropTypes.string.isRequired }

/**
 * BaseWrapper
 * @component
 *
 */
const BaseWrapper = styled(DomElement).attrs((props) => {
  const { design } = props
  return { style: { ...design.realtime } }
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
