import styled from 'styled-components';

/**
 * getAlertColor
 * @param {Object} theme
 * @param {String} variant
 * @return String
 */
const getAlertColor = (theme, variant) => {
  if (variant === 'info') return theme.COLORS.INFO;
  if (variant === 'warning') return theme.COLORS.WARNING;
  if (variant === 'success') return theme.COLORS.SUCCESS;
  return theme.COLORS.DANGER;
};

/**
 * BaseAlert
 * @component
 *
 */
const BaseAlert = styled.div.attrs((props) => {
  const { theme, variant, active } = props;
  const color = getAlertColor(theme, variant);
  return {
    style: {
      backgroundColor: color,
      boxShadow: `0 0 3px -1px ${color}`,
      transform: active ? 'scale(1,1)' : 'scale(1,0)',
    },
  };
})`
  border-radius: 2px;
  color: ${({ theme }) => theme.COLORS.FOREGROUND};
  font-family: arial;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0.5em 0 1em;
  padding: 0.5em;
  position: relative;
  transition: all 0.18s ease-in-out;
  transform-origin: top;
  .closebtn {
    cursor: pointer;
    float: right;
    background-color: transparent;
    border: none;
    outline: none;
  }
  strong {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.1em;
  }
  ul {
    margin: 0 0 0.1em;
  }
  &:after {
    content: '';
  }
  &:focus:after {
  }
`;

export default BaseAlert;
