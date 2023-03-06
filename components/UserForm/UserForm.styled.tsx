import styled from "styled-components";

export const StyledUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 18rem;
  max-width: 80vw;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.danger.main};
`;
