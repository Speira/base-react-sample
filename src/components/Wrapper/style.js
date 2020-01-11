import styled from 'styled-components';
import { propsToCSS } from '~utils/functions';

/**
 * BaseWrapper
 * @component
 *
 */
const BaseWrapper = styled.section`
  ${(props) => propsToCSS(props)}
`;

export default BaseWrapper;
