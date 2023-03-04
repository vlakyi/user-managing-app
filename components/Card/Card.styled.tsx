import styled from "styled-components";

export const StyledCardContainer = styled.div`
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.main};
`;

export const StyledCardHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.text.main};
`;

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
  overflow: auto;
`;
