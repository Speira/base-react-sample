import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '~contexts/ThemeContext';
import Button from '~components/Button';

/**
 * HomeButton
 * @component
 *
 */
function HomeButton(props) {
  const { colors } = useTheme();
  const styledProps = {
    padding: '10px',
  };
  styledProps['background-color'] = colors.SUCCESS;
  const { danger, ...rest } = props;
  if (danger) styledProps['background-color'] = colors.DANGER;
  return <Button {...styledProps} {...rest} />;
}
HomeButton.defaultProps = {
  danger: false,
};
HomeButton.propTypes = {
  danger: PropTypes.bool,
};

export default HomeButton;
