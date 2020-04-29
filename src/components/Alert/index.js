import React from 'react';
import PropTypes from 'prop-types';
import BaseAlert from './style';

/**
 * Alert
 * @component
 *
 */
function Alert(props) {
  const { message, onClose, title, type, ...rest } = props;
  const isOpen = message !== '';
  const [isAlertOpen, toggleOpen] = React.useState(isOpen);
  const closeAlert = () => {
    toggleOpen(false);
    onClose();
  };
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
  message: 'Alert !',
  onClose: () => null,
  title: '',
  type: 'danger',
};
Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onClose: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
};

export default Alert;
