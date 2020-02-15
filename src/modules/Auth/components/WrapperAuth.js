import React from 'react';
import Wrapper from '~components/Wrapper';
import styled from 'styled-components';
import { useTheme } from '~contexts/ThemeContext';

const AdaptedWrapper = styled(Wrapper)`
  margin: 3%;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
  display: flex;
  padding: 0 3% 2em 3%;
  background-color: ${({ bgcolor }) => bgcolor};
  box-shadow: 0 2px -1px ${({ boxshadowcolor }) => boxshadowcolor};
  min-height: 5em;
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
  return (
    <AdaptedWrapper
      bgcolor={colors.BACKGROUND}
      boxshadowcolor={colors.BACKGROUND}
      {...props}
    />
  );
}

export default WrapperAuth;
