import React from 'react'
import PropTypes from 'prop-types'
import StyledModal from './style'

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
