import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '~components/Wrapper';

const AdaptedWrapper = styled(Wrapper)`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * WrapperHome
 * @component
 *
 */
function WrapperHome(props) {
  const { children, ...rest } = props;
  return <AdaptedWrapper {...rest}>{children}</AdaptedWrapper>;
}

WrapperHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperHome;
