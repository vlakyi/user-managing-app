import styled from "styled-components";

export const StyledControlledInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.text.main};
`;
