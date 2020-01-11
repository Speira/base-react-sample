import React from 'react';
import PropTypes from 'prop-types';
import { withAsyncErrorHandling } from '~contexts/ErrorContext';
import BaseLink from './style';

/**
 * Link
 * @component
 *
 */
function Link(props) {
  const { href, to, ...rest } = props;
  const adaptedProps = {
    to: to || href,
    ...rest,
  };
  return <BaseLink {...adaptedProps} />;
}
Link.defaultProps = {
  className: '',
  to: '',
  href: '',
};
Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

export default withAsyncErrorHandling(Link);
