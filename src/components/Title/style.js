import styled from 'styled-components';
import { propsToCSS } from '~utils/functions';

/**
 * TitleH1
 * @component
 *
 */
const TitleH1 = styled.h1`
  ${(props) => propsToCSS(props)}
`;

/**
 * TitleH2
 * @component
 *
 */
export const TitleH2 = styled.h2`
  ${(props) => propsToCSS(props)}
`;

export default TitleH1;
