import styled from "styled-components";

interface StyledCardWithStyleOverrideProps {
  $maxWidth?: string;
}

export const StyledCardContainer = styled.div<StyledCardWithStyleOverrideProps>`
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.main};
  max-width: ${({ $maxWidth }) => $maxWidth || "unset"};
  width: 100%;
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
