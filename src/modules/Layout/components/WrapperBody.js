import React from 'react';
import { useTheme } from '~contexts/ThemeContext';
import Wrapper from '~components/Wrapper';

/**
 * WrapperBody
 * @component
 *
 */
function WrapperBody(props) {
  const { colors } = useTheme();
  const styledProps = {
    width: '100%',
    display: 'flex',
  };
  styledProps['background-color'] = colors.PRIMARY;
  styledProps['min-height'] = '100vh';
  styledProps['flex-direction'] = 'column';
  styledProps['justify-content'] = 'space-between';
  return <Wrapper {...styledProps} {...props} />;
}

export default WrapperBody;
