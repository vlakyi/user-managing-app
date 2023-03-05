import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonColor = "primary" | "secondary" | "danger" | "neutral";
type ButtonVariant = "contained" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
  const { children, color = "primary", variant = "contained", ...rest } = props;

  return (
    <StyledButton $color={color} $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

interface ButtonColorProp {
  $color: ButtonColor;
}

interface StyledButtonProps extends ButtonColorProp {
  $variant: ButtonVariant;
}

const ContainedButtonCss = css<ButtonColorProp>`
  background-color: ${({ theme, $color }) => theme[$color].main};
  color: ${({ theme }) => theme.text.secondary};
  border: none;

  &:hover {
    background-color: ${({ theme, $color }) => theme[$color].dark};
  }
`;

const OutlinedButtonCss = css<ButtonColorProp>`
  background-color: transparent;
  color: ${({ theme, $color }) => theme[$color].main};
  border: ${({ theme, $color }) => `2px solid ${theme[$color].main}`};

  &:hover {
    background-color: ${({ theme, $color }) => theme[$color].light};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${({ $variant }) => $variant === "contained" && ContainedButtonCss}
  ${({ $variant }) => $variant === "outlined" && OutlinedButtonCss}
  
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;

  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.neutral.dark};
    cursor: not-allowed;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
