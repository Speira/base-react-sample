import styled from 'styled-components';

const BaseForm = styled.form`
  width: ${({ width }) => width || 'auto'};
  padding: 1em 3%;
  display: flex;
  transition: height 1s;
  &.column {
    flex-direction: column;
    align-items: flex-end;
  }
  &.row {
    justify-content: center;
    align-items: center;
  }
`;

export default BaseForm;
