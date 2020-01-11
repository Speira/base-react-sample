import styled from 'styled-components';
import { propsToCSS } from '~utils/functions';

/**
 * BaseInput
 * @component
 *
 */
const BaseInput = styled.input`
  border: none;
  border: 1px solid ${({ boxcolor }) => boxcolor};
  padding: 0.4em;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.18s ease-in-out;
  ${(props) => propsToCSS(props)}
  &:after {
    content: '';
  }
  &:focus:after {
  }
  &:hover {
    ${(props) => propsToCSS(props, 'hover')}
  }
  &:active {
    ${(props) => propsToCSS(props, 'active')}
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
  }
`;

export default BaseInput;
