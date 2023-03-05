import styled from "styled-components";

interface StyledCardWithStyleOverrideProps {
  $minWidth?: string;
}

export const StyledCardContainer = styled.div<StyledCardWithStyleOverrideProps>`
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.main};
  min-width: ${({ $minWidth }) => $minWidth || "unset"};
  max-width: 100%;
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
