import { createPortal } from "react-dom";
import { StyledDialogOverlay } from "./Dialog.styled";
import { Card, CardContent, CardHeader } from "components/Card";
import { MouseEventHandler } from "react";

interface Props {
  children: React.ReactNode;
  onClose: MouseEventHandler<HTMLElement>;
}

export function Dialog({ children, onClose }: Props) {
  const parent = document.getElementById("dialog-root");

  return createPortal(
    <StyledDialogOverlay onClick={onClose}>
      <Card>{children}</Card>
    </StyledDialogOverlay>,
    parent
  );
}

Dialog.Header = CardHeader;
Dialog.Content = CardContent;
