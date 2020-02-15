import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '~contexts/ThemeContext';
import Link from '~components/Link';

/**
 * HeaderLink
 * @component
 *
 */
function HeaderLink(props) {
  const { colors } = useTheme();
  const { TERTIARY, QUATERNARY, BACKGROUND, FOREGROUND } = colors;
  const { children, isActive, type, to } = props;
  const styledProps = {
    'border-radius': '4px',
    color: FOREGROUND,
    padding: '8px',
    margin: '0 4px 0 0',
  };
  if (type === 'nav') {
    styledProps.color = BACKGROUND;
    styledProps['background-color'] = isActive ? QUATERNARY : TERTIARY;
  }
  if (type === 'brand') {
    styledProps['font-size'] = '2em';
    styledProps['font-weight'] = '600';
  }
  return (
    <Link to={to} {...styledProps}>
      {children}
    </Link>
  );
}
HeaderLink.defaultProps = {
  isActive: false,
  type: '',
};
HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default HeaderLink;
