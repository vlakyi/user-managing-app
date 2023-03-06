import styled from "styled-components";

export const StyledLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    align-items: center;
  }
`;
