import styled from 'styled-components'

const BaseFieldset = styled.fieldset`
  width: 100%;
  max-width: 50em;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-width: 0.5px;
  margin-bottom: 1em;
  box-shadow: 1px 2px 5px -3px ${({ theme }) => theme.COLORS.PRIMARY};
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
`

export default BaseFieldset
