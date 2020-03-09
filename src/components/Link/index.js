import React from 'react';
import PropTypes from 'prop-types';
import { withAsyncErrorHandling } from '~contexts/ErrorContext';
import BaseLink, { BoxedLink } from './style';

/**
 * Link
 * @component
 *
 */
export function Link(props) {
  const { href, to, variant, boxactive, ...rest } = props;
  const adaptedProps = {
    to: to || href,
    active: (boxactive && 1) || 0,
    ...rest,
  };
  let LinkComponent = BaseLink;
  if (variant === 'box') {
    LinkComponent = BoxedLink;
  }
  return <LinkComponent {...adaptedProps} />;
}
Link.defaultProps = {
  boxactive: false,
  className: '',
  href: '',
  size: '',
  to: '',
  variant: 'default',
};
Link.propTypes = {
  boxactive: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf(['box', 'default']),
};

export default withAsyncErrorHandling(Link);
