import styled from 'styled-components';
import { propsToCSS } from '~utils/functions';

/**
 * BaseDropdown
 * @component
 *
 */
const BaseDropdown = styled.button`
  border: none;
  box-shadow: ${({ boxcolor }) => `1px 1px 2px -1px ${boxcolor}`};
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.18s ease-in-out;
  ${(props) => propsToCSS(props)}
  &:after {
    content: '';
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    border-radius: ${({ borderradius }) => borderradius};
    top: 0;
    left: 0;
    opacity: 0.25;
    transform: scale(0, 1);
    transform-origin: left;
    transition: none;
  }
  &:focus:after {
    transform: scale(1, 1);
    transition: all 0.2s ease-in-out;
  }
  &:hover {
  ${(props) => propsToCSS(props, 'hover')}
    box-shadow: ${({ boxcolorhover, boxcolor }) =>
      `1px 1px 2px -1px ${boxcolorhover || boxcolor}`};
  }
  &:active {
  ${(props) => propsToCSS(props, 'active')}
    box-shadow: ${({ boxcoloractive, boxcolor }) =>
      `0px 0px 6px -3px ${boxcoloractive || boxcolor} inset`};
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
  }
`;

export default BaseDropdown;
