import styled from 'styled-components';

/**
 * DropdownButton
 * @desc :: The button who is always visible
 * @component
 *
 */
export const DropdownButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  background-color: ${({ theme, color }) => theme.COLORS[color.toUpperCase()]};
  padding: 1em;
  box-shadow: 1px 1px 2px -1px black;
  font-size: 1em;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
`;

/**
 * DropdownContent
 * @desc :: the content containing all the items
 * @component
 *
 */
export const DropdownContent = styled.div.attrs((props) => {
  const { opened } = props;
  return {
    style: {
      transform: `scale(1, ${opened ? '1' : '0'})`,
    },
  };
})`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transform-origin: top;
  transition: all 0.2s ease-out;
  z-index: 1;
  button {
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.FOREGROUND};
    border: none;
    color: ${({ theme }) => theme.COLORS.FOREGROUND};
    cursor: pointer;
    display: block;
    padding: 12px 16px;
    text-decoration: none;
    transition: all 0.18s ease-in-out;
  }
  button:hover {
    background-color: ${({ theme, color }) =>
      theme.COLORS[color.toUpperCase()]};
  }
`;

/**
 * BaseDropdown
 * @component
 *
 */
const BaseDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export default BaseDropdown;
