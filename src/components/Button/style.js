import styled from 'styled-components';

/**
 * BaseButton
 * @component
 *
 */
const BaseButton = styled.button.attrs((props) => {
  const { color, theme, inversed } = props;
  const themeColor = theme.COLORS[color.toUpperCase()];
  return {
    style: {
      color: inversed ? '#ffffff' : '#000000cc',
      backgroundColor: themeColor,
    },
  };
})`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border: none;
  border-radius: 2px;
  box-shadow: 1px 1px 2px -1px black;
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.18s ease-in-out;
  padding: 0.5em;
  &:after {
    content: '';
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    border-radius: 2px;
    top: 0;
    left: 0;
    opacity: 0.25;
    transform: scale(0, 1);
    transform-origin: left;
    transition: none;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition: all 0.2s ease-in-out;
  }
  &:disabled:after {
    transform: none;
  }
  &:hover {
  }
  &:active {
    opacity: 0.5;
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
  }
`;

export default BaseButton;

export const RoundedButton = styled(BaseButton)`
  border-radius: 100%;
`;
