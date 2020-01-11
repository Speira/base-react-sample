import React from 'react';
import PropTypes from 'prop-types';
import FooterContainer from '~Layout/containers/FooterContainer';
import HeaderContainer from '~Layout/containers/HeaderContainer';
import BodyContainer from '~Layout/containers/BodyContainer';

/**
 * Layout
 * @component
 *
 */
function Layout(props) {
  const { children } = props;
  return (
    <BodyContainer>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </BodyContainer>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
