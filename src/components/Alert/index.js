import React from 'react';
import PropTypes from 'prop-types';
import BaseAlert from './style';

/**
 * Alert
 * @component
 *
 */
function Alert(props) {
  const { message, isOpen, type, title, ...rest } = props;
  const [isAlertOpen, toggleOpen] = React.useState(isOpen);
  const closeAlert = () => toggleOpen(false);
  React.useEffect(() => {
    toggleOpen(isOpen);
  }, [isOpen, message, type]);
  return (
    <BaseAlert {...rest} variant={type} active={isAlertOpen ? 1 : 0}>
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
  );
}
Alert.defaultProps = {
  className: '',
  title: '',
  message: 'Alert !',
  isOpen: false,
  type: 'danger',
};
Alert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  isOpen: PropTypes.bool,
  type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
};

export default Alert;
