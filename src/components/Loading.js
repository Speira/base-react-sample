import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

/**
 * spin
 * @keyframes
 */
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

/**
 * StyledLoading
 * @component
 */
const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loader-message {
    margin-bottom: 0.5em;
    font-weight: 300;
  }
  .loader {
    border: 1em solid var(--color-info);
    border-top: 1em solid var(--color-success);
    border-right: 1em solid var(--color-info);
    border-bottom: 1em solid var(--color-success);
    border-radius: 50%;
    width: 8em;
    height: 8em;
    animation: ${spin} 2s linear infinite;
  }
`
/**
 * Loading
 * @component
 */
function Loading(props) {
  const { message, ...rest } = props
  return (
    <StyledLoading {...rest}>
      <div className="loader-message">{message}</div>
      <div className="loader" />
    </StyledLoading>
  )
}
Loading.defaultProps = {
  className: '',
  message: '',
}
Loading.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
}

export default Loading
