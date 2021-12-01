import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import BaseAlert from './style'

const { STATUS } = constants

/**
 * Alert
 * @component
 *
 */
function Alert(props) {
  const { message, onClose, title, status, ...rest } = props
  const isOpen = message.length !== 0
  const [isAlertOpen, toggleOpen] = React.useState(isOpen)
  const closeAlert = () => {
    toggleOpen(false)
    onClose()
  }
  React.useEffect(() => {
    toggleOpen(isOpen)
  }, [isOpen, message, status])
  return (
    <BaseAlert {...rest} status={status} active={isAlertOpen ? 1 : 0}>
      <button type="button" className="closebtn" onClick={closeAlert}>
        &times;
      </button>
      {title && <strong>{title}</strong>}
      {Array.isArray(message) ? (
        <ul>
          {message.map((row) => (
            <li>{row}</li>
          ))}
        </ul>
      ) : (
        <span className="text-message">{message}</span>
      )}
    </BaseAlert>
  )
}
Alert.defaultProps = {
  className: '',
  message: 'Alert !',
  onClose: () => null,
  title: '',
  status: STATUS.DANGER,
}
Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onClose: PropTypes.func,
  title: PropTypes.string,
  status: PropTypes.oneOf(Object.values(STATUS)),
}

export default Alert
