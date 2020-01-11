import React from 'react';
import PropTypes from 'prop-types';
import { withAsyncErrorHandling } from '~contexts/ErrorContext';
import BaseButton from './style';

/**
 * Button
 * @component
 *
 */
function Button(props) {
  return <BaseButton {...props} />;
}
Button.defaultProps = {
  boxcolor: 'black',
  boxcoloractive: '',
  boxcolorhover: '',
  className: '',
  onBlur: () => null,
  onClick: () => null,
  type: 'button',
};
Button.propTypes = {
  boxcolor: PropTypes.string,
  boxcoloractive: PropTypes.string,
  boxcolorhover: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default withAsyncErrorHandling(Button);
