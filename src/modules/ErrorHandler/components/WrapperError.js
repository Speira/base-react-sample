import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '~contexts/ThemeContext';

import Wrapper from '~components/Wrapper';

/**
 * WrapperError
 * @component
 *
 */
function WrapperError(props) {
  const { fullpage, ...restProps } = props;
  const { colors } = useTheme();
  const styledProps = { ...restProps };
  if (fullpage) {
    styledProps.height = '100vh';
    styledProps['background-color'] = colors.SECONDARY;
    styledProps['font-size'] = '1.5em';
  }
  styledProps.display = 'flex';
  styledProps.padding = '0 3%';
  styledProps['align-items'] = 'center';
  styledProps['flex-direction'] = 'column';
  styledProps['justify-content'] = 'center';
  return <Wrapper {...styledProps} />;
}
WrapperError.defaultProps = {
  fullpage: false,
};
WrapperError.propTypes = {
  fullpage: PropTypes.bool,
};

export default WrapperError;
