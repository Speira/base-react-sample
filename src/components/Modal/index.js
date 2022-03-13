import React from 'react'
import PropTypes from 'prop-types'
import BaseModal from './style'

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
    <BaseModal visible={isOpen ? 1 : 0} {...rest}>
      <div className="content">
        {!noCloseButton && (
          <button type="button" className="close" onClick={closeModal}>
            &times;
          </button>
        )}
        {children}
      </div>
    </BaseModal>
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
