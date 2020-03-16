import React from 'react';
import styled from 'styled-components';
import BaseWrapper from '~components/Wrapper';

const Wrapper = styled(BaseWrapper)`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

/**
 * WrapperBody
 * @component
 *
 */
function WrapperBody(props) {
  return <Wrapper {...props} />;
}

export default WrapperBody;
