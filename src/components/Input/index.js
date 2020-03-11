import React from 'react';
import PropTypes from 'prop-types';
import { colorsThemesList } from '~contexts/ThemeContext';
import { withAsyncErrorHandling } from '~contexts/ErrorContext';
import BaseInput from './style';

/**
 * Input
 * @component
 *
 */
export function Input(props) {
  return <BaseInput {...props} />;
}
Input.defaultProps = {
  className: '',
  color: colorsThemesList[0],
  onBlur: () => null,
  onChange: () => null,
  type: 'text',
};
Input.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(colorsThemesList),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default withAsyncErrorHandling(Input);
