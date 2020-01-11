import React from 'react';
import { useTheme } from '~contexts/ThemeContext';
// import PropTypes from 'prop-types'

import Button from '~components/Button';

/**
 * AuthButton
 * @component
 *
 */
function AuthButton(props) {
  const { colors } = useTheme();
  const styledProps = {};
  styledProps['background-color'] = colors.INFO;
  styledProps.padding = '0.5em';
  return <Button {...styledProps} {...props} />;
}
AuthButton.defaultProps = {};
AuthButton.propTypes = {};

export default AuthButton;
