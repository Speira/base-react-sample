import styled from 'styled-components'

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
    border: 1em solid ${({ theme }) => theme.COLORS.DYNAMIC.INFO};
    border-top: 1em solid ${({ theme }) => theme.COLORS.DYNAMIC.SUCCESS};
    border-right: 1em solid ${({ theme }) => theme.COLORS.DYNAMIC.WARNING};
    border-bottom: 1em solid ${({ theme }) => theme.COLORS.DYNAMIC.DANGER};
    border-radius: 50%;
    width: 8em;
    height: 8em;
    animation: spin 2s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

export default BaseLoading
