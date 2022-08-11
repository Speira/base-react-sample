import React from 'react'
import PropTypes from 'prop-types'
import StyledH1, { StyledH2, StyledH3 } from './style'

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
 * Title
 * @component
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
