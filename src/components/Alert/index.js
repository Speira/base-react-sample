import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '~contexts/ThemeContext';
import BaseAlert from './style';

const colorize = (color) => ({
  backgroundcolor: color,
  boxshadow: `0 0 3px -1px ${color}`,
});

/**
 * Alert
 * @component
 *
 */
function Alert(props) {
  const { message, isOpen, type, ...rest } = props;
  const { colors } = useTheme();
  const [isAlertOpen, toggleOpen] = React.useState(isOpen);
  const closeAlert = () => toggleOpen(false);
  React.useEffect(() => {
    toggleOpen(isOpen);
  }, [isOpen]);
  let styled = colorize(colors.DANGER);
  if (type === 'info') styled = colorize(colors.INFO);
  if (type === 'warning') styled = colorize(colors.WARNING);
  if (type === 'success') styled = colorize(colors.SUCCESS);
  styled.transform = isAlertOpen ? 'scale(1,1)' : 'scale(1,0)';
  styled.color = colors.FOREGROUND;
  console.warn(isOpen);
  console.warn(styled);

  return (
    <BaseAlert {...rest} {...styled}>
      <button type="button" className="closebtn" onClick={closeAlert}>
        &times;
      </button>
      <span>{message}</span>
    </BaseAlert>
  );
}
Alert.defaultProps = {
  className: '',
  message: 'Alert !',
  isOpen: false,
  type: 'danger',
};
Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  isOpen: PropTypes.bool,
  type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
};

export default Alert;
