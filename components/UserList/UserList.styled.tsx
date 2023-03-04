import styled from "styled-components";

export const StyledUserListContainer = styled.div`
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.main};
`;

export const StyledUserListHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.text.main};
`;

export const StyledUserListHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const StyledUserListTableContainer = styled.div`
  padding: 1rem;
  overflow: auto;
`;
