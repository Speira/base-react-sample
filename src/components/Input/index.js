import React from 'react';
import PropTypes from 'prop-types';
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
  boxcolor: 'black',
  boxcoloractive: '',
  boxcolorhover: '',
  className: '',
  onBlur: () => null,
  onClick: () => null,
  type: 'text',
};
Input.propTypes = {
  boxcolor: PropTypes.string,
  boxcoloractive: PropTypes.string,
  boxcolorhover: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default withAsyncErrorHandling(Input);
