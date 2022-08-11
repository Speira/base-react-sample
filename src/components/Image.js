import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * BaseImage
 * @component
 *
 */
const BaseImage = styled.img`
  width: ${({ width }) => width || 'auto'};
`
/**
 * Image
 * @component
 *
 */
function Image(props) {
  const { ...rest } = props

  return <BaseImage {...rest} />
}
Image.defaultProps = {
  className: '',
}
Image.propTypes = {
  className: PropTypes.string,
}

export default Image
