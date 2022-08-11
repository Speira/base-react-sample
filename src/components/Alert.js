import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import constants from '~utils/constants'

const { STATUS } = constants
/**
 * StyledAlert
 * @component
 */
const StyledAlert = styled.section`
  border-radius: 3px;
  font-size: 1em;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  box-shadow: 2px 2px 2px -1px var(--bg-text-color);
  color: var(--bg-text-color);
  margin: 0em;
  padding: 0em;
  transform: scale(1, 0);
  .close-alert {
    display: none;
    cursor: pointer;
    float: right;
    background-color: transparent;
    border-width: 1px;
    color: var(--bg-text-color);
    box-shadow: 1px 1px 1px 1px currentcolor;
    border-radius: 3px;
  }
  .close-alert:hover {
    opacity: 0.5;
  }
  &.clos strong {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.1em;
  }
  ul {
    margin: 0 0 0.1em;
  }
  /* opening management */
  &.open {
    margin: 0.5em 0 1em;
    padding: 0.9em;
    transform: scale(1, 1);
  }
  &.open .close-alert {
    display: block;
  }
`

/**
 * Alert
 * @component
 * @desc ::
 *      An alert is opened automaticaly when a message is set
 *      The alert disapear when the message is unset.
 *
 */
function Alert(props) {
  const { className, message, onClose, title, status, ...rest } = props
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
    <StyledAlert
      {...rest}
      className={`${className} bg-light-${status} ${isAlertOpen && 'open'}`}>
      <button
        type="button"
        className="close-alert border-light"
        onClick={closeAlert}>
        &times;
      </button>
      {title && <strong>{title}</strong>}
      {Array.isArray(message) ? (
        <ul>
          {message.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>
      ) : (
        <span className="text-message">{message}</span>
      )}
    </StyledAlert>
  )
}
Alert.defaultProps = {
  className: '',
  message: '',
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
