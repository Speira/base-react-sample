import React from 'react';
import PropTypes from 'prop-types';
import { colorsThemesList } from '~contexts/ThemeContext';
import { withAsyncErrorHandling } from '~contexts/ErrorContext';
import BaseButton, { RoundedButton } from './style';

/**
 * Button
 * @component
 *
 */
function Button(props) {
  const { inversed, variant, ...rest } = props;
  let ComponentButton = BaseButton;
  if (variant === 'rounded') ComponentButton = RoundedButton;
  return <ComponentButton inversed={inversed ? 1 : 0} {...rest} />;
}
Button.defaultProps = {
  className: '',
  color: colorsThemesList[0],
  disabled: false,
  height: '',
  inversed: false,
  onBlur: () => null,
  onClick: () => null,
  type: 'button',
  variant: '',
  width: '',
};
Button.propTypes = {
  className: PropTypes.string,
  /** colors are located in src/utils/constants file */
  color: PropTypes.oneOf(colorsThemesList),
  disabled: PropTypes.bool,
  height: PropTypes.string,
  inversed: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['', 'rounded']),
  width: PropTypes.string,
};

export default withAsyncErrorHandling(Button);
