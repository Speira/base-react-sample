import styled, { keyframes } from 'styled-components'

/**
 * spin
 * @keyframes
 *
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
 * BaseLoading
 * @component
 *
 */
const BaseLoading = styled.div`
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

export default BaseLoading
