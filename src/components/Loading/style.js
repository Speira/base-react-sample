import styled from 'styled-components';

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
    border: 16px solid ${({ theme }) => theme.COLORS.INFO};
    border-top: 16px solid ${({ theme }) => theme.COLORS.SUCCESS}; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
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
`;

export default BaseLoading;
