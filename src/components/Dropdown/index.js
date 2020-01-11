import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from './style';

/**
 * Dropdown
 * @component
 *
 */
function Dropdown(props) {
  return <BaseDropdown {...props} />;
}
Dropdown.defaultProps = {
  boxcolor: 'none',
  boxcoloractive: '',
  boxcolorhover: '',
  className: '',
  onBlur: () => null,
  onClick: () => null,
  type: 'button',
};
Dropdown.propTypes = {
  boxcolor: PropTypes.string,
  boxcoloractive: PropTypes.string,
  boxcolorhover: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Dropdown;
