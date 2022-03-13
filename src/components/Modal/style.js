import styled, { keyframes } from 'styled-components'

const animatetop = keyframes`
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
`

const animeButton = keyframes`
  0% {
    transform: scale(1,1)
    }
  50% {
    transform: scale(1,1)
  }

  75%{
    transform: scale(0.75,0.75)
  }
  100%{
    transform: scale(1,1)
  }

`

const BaseModal = styled.div.attrs((props) => {
  const { visible } = props
  const style = {}
  style.display = visible ? 'block' : 'none'
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
    background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
    margin: 15% auto;
    min-height: 5em;
    padding: 0;
    width: 60%;
    box-shadow: 2px 2px 14px -2px ${({ theme }) => theme.COLORS.STATIC.DARK};
    animation-name: ${animatetop};
    animation-duration: 0.4s;
    .header {
      padding: 2px 16px;
      min-height: 3em;
      background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
      color: ${({ theme }) => theme.COLORS.STATIC.FOREGROUND};
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
      background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
      button {
        margin: 0 1em;
        width: 8em;
      }
    }
  }
  .close {
    cursor: pointer;
    float: right;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.COLORS.STATIC.DARK};
    border-radius: 3px;
    animation: ${animeButton} 1.2s;
  }
  .close:hover {
    opacity: 0.5;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

export default BaseModal
