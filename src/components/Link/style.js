import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { propsToCSS } from '~utils/functions';

/**
 * BaseLink
 * @component
 *
 */
const BaseLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  ${(props) => propsToCSS(props)}
  &:hover {
    ${(props) => propsToCSS(props, 'hover')}
  }
  &:active {
    ${(props) => propsToCSS(props, 'active')}
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export default BaseLink;
