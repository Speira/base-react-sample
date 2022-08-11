import styled from 'styled-components'

/**
 * StyledInput
 * @component
 *
 */
const StyledInput = styled.input`
  background-color: var(--color-light);
  border-width: 0;
  border-style: solid;
  border-radius: 2px;
  margin: auto;
  outline: none;
  position: relative;
  padding: 0.4em;
  transition: all 0.18s ease-in-out;
  &.border {
    border-width: 1px;
  }
  &.danger {
    border-width: 2px;
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0 0 3px -1px currentcolor inset;
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
    cursor: text;
  }
  &:disabled:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: none;
    background-color: var(--color-dark);
  }
`

export default StyledInput
