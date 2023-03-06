import styled from "styled-components";

export const StyledDialogOverlay = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.overlay.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
