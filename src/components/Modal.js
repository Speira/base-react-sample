import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

/**
 * animatetop
 * @keyframes
 *
 */
const animatetop = keyframes`
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
`

/**
 * animeButton
 * @keyframes
 *
 */
const animeButton = keyframes`
  0% { transform: scale(1,1) }
  50% { transform: scale(1,1) }
  75%{ transform: scale(0.75,0.75) }
  100%{ transform: scale(1,1) }
`

/**
 * StyledModal
 * @component
 */
const StyledModal = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--color-light-dark);
  display: none;
  .content {
    position: relative;
    margin: 15% auto;
    min-height: 5em;
    padding: 0;
    width: 60%;
    box-shadow: 2px 2px 14px -2px var(--color-dark);
    animation-name: ${animatetop};
    animation-duration: 0.4s;
    .header {
      padding: 2px 16px;
      min-height: 3em;
      background-color: var(--color-tertiary);
      color: var(--color-dark);
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
      background-color: var(--color-tertiary);
      button {
        margin: 0 1em;
        width: 8em;
      }
    }
  }
  .close-button {
    cursor: pointer;
    float: right;
    background-color: transparent;
    box-shadow: 1px 1px 1px 1px var(--color-dark);
    border-radius: 3px;
    animation: ${animeButton} 1.2s;
  }
  .close-button:hover {
    opacity: 0.5;
  }

  .close-button:hover,
  .close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  /* behaviors management */
  &.open {
    display: block;
  }
`
/**
 * Modal
 * @component
 *
 * @desc ::
 *    DO NOT CALL THIS COMPONENT, call 'activeModal' method instead
 *    provided by "useModal()" loccated in contexts/ModalContext
 *
 * @see see src/contexts/ModalContext
 *
 */
function Modal(props) {
  const { children, isOpen, noCloseButton, onCloseClick, ...rest } = props
  const closeModal = () => {
    onCloseClick()
  }

  return (
    <StyledModal {...rest} className={isOpen && 'open'}>
      <div className="content">
        {!noCloseButton && (
          <button type="button" className="close-button" onClick={closeModal}>
            &times;
          </button>
        )}
        {children}
      </div>
    </StyledModal>
  )
}
Modal.defaultProps = {
  children: undefined,
  className: '',
  isOpen: false,
  noCloseButton: false,
  onCloseClick: () => null,
}
Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  noCloseButton: PropTypes.bool,
  onCloseClick: PropTypes.func,
}

export default Modal
