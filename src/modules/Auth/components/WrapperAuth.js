import React from 'react';
import Wrapper from '~components/Wrapper';
import styled from 'styled-components';
import { useTheme } from '~contexts/ThemeContext';

const AdaptedWrapper = styled(Wrapper)`
  margin: 3%;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 24em;
    margin-bottom: 1em;
  }
  label {
    margin-bottom: 8px;
  }
  .center {
    align-self: center;
  }
  @media (min-width: 1024px) {
    margin: 0 20%;
  }
`;

/**
 * WrapperAuth
 * @component
 *
 */
function WrapperAuth(props) {
  const { colors } = useTheme();
  const styledProps = {
    display: 'flex',
    padding: '0 3% 2em 3%',
  };
  styledProps['flex-direction'] = 'column';
  styledProps['justify-content'] = 'flex-start';
  styledProps['border-radius'] = '4px';
  styledProps['background-color'] = colors.BACKGROUND;
  styledProps['box-shadow'] = `0 0 2px -1px ${colors.FOREGROUND}`;
  styledProps['min-height'] = '5em';
  return <AdaptedWrapper {...styledProps} {...props} />;
}

export default WrapperAuth;
