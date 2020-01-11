import styled from 'styled-components';
import { propsToCSS } from '~utils/functions';

/**
 * BaseAlert
 * @component
 *
 */
const BaseAlert = styled.div`
  padding: 0.5em;
  border-radius: 2px;
  position: relative;
  transition: all 0.18s ease-in-out;
  font-size: 0.9em;
  font-weight: 600;
  font-family: arial;
  margin: 0.5em 0 1em;
  ${(props) => propsToCSS(props)}
  box-shadow: 0 0 3px -1px black;
  .closebtn {
    cursor: pointer;
    float: right;
    background-color: transparent;
    border: none;
    outline: none;
  }
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
`;

export default BaseAlert;
