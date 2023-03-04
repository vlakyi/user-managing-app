import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

interface StyledButtonProps {
  $variant: ButtonVariant;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme, $variant }) => theme[$variant].main};
  padding: 0.5rem 1rem;
  border: unset;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.875rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $variant }) => theme[$variant].dark};
  }
`;
