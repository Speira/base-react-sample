import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '~components/Wrapper';

const AdaptedWrapper = styled(Wrapper)`
  padding: 3%;
`;

/**
 * WrapperHome
 * @component
 *
 */
function WrapperHome(props) {
  const { children } = props;
  const styledProps = {};
  styledProps.display = 'flex';
  styledProps['flex-direction'] = 'column';
  styledProps['align-items'] = 'center';

  return <AdaptedWrapper {...styledProps}>{children}</AdaptedWrapper>;
}

WrapperHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperHome;
