import React from 'react';

import BaseWrapper from './style';

/**
 * Wrapper
 * @component
 *
 */
function Wrapper(props) {
  return <BaseWrapper {...props} />;
}
Wrapper.defaultProps = {};
Wrapper.propTypes = {};

export default Wrapper;
