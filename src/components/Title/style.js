import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'

/**
 * TitleElement
 * @component
 *
 */
const TitleElement = (props) => {
  const { type, ...rest } = props
  let Title = (p) => <h1 {...p} /> // eslint-disable-line
  if (type === 'h2') Title = (p) => <h2 {...rest} /> // eslint-disable-line
  if (type === 'h3') Title = (p) => <h3 {...rest} /> // eslint-disable-line
  if (type === 'h4') Title = (p) => <h4 {...rest} /> // eslint-disable-line
  return <Title {...rest} /> // eslint-disable-line
}
TitleElement.propTypes = { type: PropTypes.string.isRequired }

/**
 * BaseTitle
 * @component
 *
 */
const BaseTitle = styled(TitleElement).attrs((props) => {
  const { style = {}, status, theme } = props
  if (status) style.color = getStatusColor({ theme, status })
  return {
    style,
  }
})`
  font-size: ${({ size }) => size || '2.5em'};
  margin: ${({ margin }) => margin || '0 0 0.5em'};
  padding: ${({ padding }) => padding || '0.5em'};
  color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  &.inline {
    display: inline-block;
  }
  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
  &.light {
    color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    text-shadow: 1px 1px 0px ${({ theme }) => theme.COLORS.STATIC.DARK};
  }
`

export default BaseTitle
