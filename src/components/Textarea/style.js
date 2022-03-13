import styled from 'styled-components'

/**
 * BaseTextarea
 * @component
 *
 */
const BaseTextarea = styled.textarea`
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 2px -1px ${({ theme }) => theme.COLORS.STATIC.DARK};
  margin: 0 1em;
  min-height: 4em;
  min-width: 400px;
  padding: 0.8em;
  vertical-align: middle;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px 0px;
  }
`

export default BaseTextarea
