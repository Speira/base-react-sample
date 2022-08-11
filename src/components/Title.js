import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledH1
 * @component
 */
const StyledH1 = styled.h1`
  font-size: 2.5em;
  margin: 0 0 0.5em;
  padding: 0.5em;
`
/**
 * StyledH2
 * @component
 */
const StyledH2 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 0.5em;
  padding: 0.5em;
`
/**
 * StyledH3
 * @component
 */
const StyledH3 = styled.h2`
  font-size: 1.5em;
  margin: 0 0 0.5em;
  padding: 0.5em;
`

/**
 * StyledTitle
 * @component
 */
function StyledTitle({ tag, ...rest }) {
  if (tag === 'h2') return <StyledH2 {...rest} />
  if (tag === 'h3') return <StyledH3 {...rest} />
  return <StyledH1 {...rest} />
}
StyledTitle.propTypes = { tag: PropTypes.string.isRequired }

/**
 *
 *
 * Title
 * @component
 *
 *
 */
export default function Title(props) {
  const { className, type, ...rest } = props
  return <StyledTitle tag={type} className={className} {...rest} />
}
Title.defaultProps = {
  className: '',
  type: 'h1',
}
Title.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3']),
}
