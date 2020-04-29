import styled from 'styled-components';

/**
 * BaseInput
 * @component
 *
 */
const BaseInput = styled.input.attrs((props) => {
  const { color, theme } = props;
  const themeColor = theme.COLORS[color.toUpperCase()];
  return {
    style: {
      border: `1px solid ${themeColor}`,
    },
  };
})`
  border-radius: 2px;
  cursor: pointer;
  margin: 0 1em;
  outline: none;
  padding: 0.4em;
  position: relative;
  transition: all 0.18s ease-in-out;
  width: ${({ width }) => width || 'auto'};
  &:after {
    content: '';
  }
  &:focus:after {
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0px 0px 4px -2px;
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
    cursor: text;
  }
`;

export default BaseInput;
