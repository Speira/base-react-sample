import React from 'react'
import PropTypes from 'prop-types'
import BaseModal from './style'

/**
 * Modal
 * @component
 *
 * @desc ::
 *    Modal is a Singleton initialized in ModalContext
 *    DO NOT CALL THIS COMPONENT, call 'activeModal' method instead
 *    provided by "useModal()" loccated in contexts/ModalContext
 *
 * @see src/contexts/ModalContext
 *
 */
function Modal(props) {
  const { children, open, closeModal, ...rest } = props
  const [isOpen, setIsOpen] = React.useState(open)
  const toggleOpen = () => setIsOpen(!isOpen)

  const display = isOpen ? 1 : 0
  React.useEffect(() => {
    if (open !== isOpen) {
      toggleOpen()
    }
  })
  return (
    <BaseModal display={display} {...rest}>
      <div className="content">
        <button type="button" className="close" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </BaseModal>
  )
}
Modal.defaultProps = {
  children: undefined,
  className: '',
  open: false,
  closeModal: () => null,
}
Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default Modal
