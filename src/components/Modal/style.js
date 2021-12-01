import styled, { keyframes } from 'styled-components'

const animatetop = keyframes`
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
`

const BaseModal = styled.div.attrs((props) => {
  const { display } = props
  const style = {}
  style.display = display ? 'block' : 'none'
  return {
    style,
  }
})`
  position: fixed; /* Stay in place */
  z-index: 4; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  .content {
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    margin: 15% auto;
    padding: 0;
    width: 60%;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: ${animatetop};
    animation-duration: 0.4s;
    .header {
      padding: 2px 16px;
      min-height: 3em;
      background-color: ${({ theme }) => theme.COLORS.TERTIARY};
      color: ${({ theme }) => theme.COLORS.FOREGROUND};
    }
    .body {
      padding: 1em 2em;
      min-height: 5em;
    }
    .footer {
      display: flex;
      justify-content: space-around;
      padding: 2px 16px;
      min-height: 3em;
      background-color: ${({ theme }) => theme.COLORS.TERTIARY};
      button {
        margin: 0 1em;
        width: 8em;
      }
    }
  }
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

export default BaseModal
