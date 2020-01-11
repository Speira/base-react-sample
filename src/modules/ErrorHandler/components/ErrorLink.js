import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '~contexts/ThemeContext';
import Link from '~components/Link';

/**
 * ErrorLink
 * @component
 *
 */
function ErrorLink(props) {
  const { colors } = useTheme();
  const { TERTIARY, BACKGROUND } = colors;
  const { children, to, ...rest } = props;
  const styledProps = {
    margin: '0 4px 0 0',
    padding: '8px',
    color: BACKGROUND,
  };
  styledProps['background-color'] = TERTIARY;
  styledProps['border-radius'] = '4px';
  styledProps['font-size'] = '0.8em';
  return (
    <Link to={to} {...rest} {...styledProps}>
      {children}
    </Link>
  );
}
ErrorLink.defaultProps = {};
ErrorLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default ErrorLink;
