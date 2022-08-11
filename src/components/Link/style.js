import styled from 'styled-components'
import { Link } from 'react-router-dom'
import constants from '~utils/constants'

const { MEDIA_QUERIES } = constants

/**
 * StyledLink
 * @component
 *
 */
const StyledLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  margin: 0 4px;
  text-decoration: underline;
  color: var(--bg-text-color);
  &:active {
    opacity: 0.5;
  }

  &.boxed {
    font-weight: 600;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px currentcolor;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  &.boxed:hover {
    transition: all 0.3s;
    box-shadow: 1px 1px 2px 2px currentcolor;
    transform: translateZ(1em);
    opacity: 0.8;
  }
  @media only screen and (min-width: ${MEDIA_QUERIES.MD}) {
    padding: 8px;
  }
`

export default StyledLink
