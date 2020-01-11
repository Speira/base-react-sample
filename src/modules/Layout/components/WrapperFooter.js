import React from 'react';
import { useTheme } from '~contexts/ThemeContext';
import Wrapper from '~components/Wrapper';

/**
 * WrapperFooter
 * @component
 *
 */
function WrapperFooter(props) {
  const { colors } = useTheme();
  const styledProps = {
    height: '100px',
    width: '100%',
  };
  styledProps['background-color'] = colors.SECONDARY;
  return <Wrapper {...styledProps} {...props} />;
}

export default WrapperFooter;
