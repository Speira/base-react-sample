import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '~components/Wrapper';
import { useTheme } from '~contexts/ThemeContext';

/**
 * WrapperError
 * @component
 *
 */
function WrapperError(props) {
  const { fullpage, children } = props;
  const { colors } = useTheme();
  const styledProps = {};
  styledProps.display = 'flex';
  styledProps['flex-direction'] = 'column';
  styledProps['align-items'] = 'center';
  styledProps['justify-content'] = 'center';
  if (fullpage) {
    styledProps.height = '100vh';
    styledProps['background-color'] = colors.SECONDARY;
    styledProps['font-size'] = '1.5em';
  }
  return <Wrapper {...styledProps}>{children}</Wrapper>;
}
WrapperError.defaultProps = {
  fullpage: false,
};
WrapperError.propTypes = {
  children: PropTypes.node.isRequired,
  fullpage: PropTypes.bool,
};

export default WrapperError;
