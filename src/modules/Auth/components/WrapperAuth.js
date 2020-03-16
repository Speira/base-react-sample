import React from 'react';
import Wrapper from '~components/Wrapper';
import styled from 'styled-components';

const AdaptedWrapper = styled(Wrapper)`
  margin: 3%;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
  display: flex;
  padding: 0 3% 2em 3%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  box-shadow: 0 2px -1px ${({ theme }) => theme.COLORS.BACKGROUND};
  min-height: 5em;
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
  return <AdaptedWrapper {...props} />;
}

export default WrapperAuth;
