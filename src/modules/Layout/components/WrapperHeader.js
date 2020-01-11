import React from 'react';
import { useTheme } from '~contexts/ThemeContext';
import Wrapper from '~components/Wrapper';

/**
 * WrapperHeader
 * @component
 *
 */
function WrapperHeader(props) {
  const { colors } = useTheme();
  const styledProps = {
    color: colors.FOREGROUND,
    height: '72px',
    padding: '0 1em',
    display: 'flex',
  };
  styledProps['align-items'] = 'center';
  styledProps['justify-content'] = 'space-between';
  styledProps['background-color'] = colors.SECONDARY;
  return <Wrapper {...styledProps} {...props} />;
}

export default WrapperHeader;
