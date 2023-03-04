import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardHeaderContainer,
} from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <StyledCardContainer>{children}</StyledCardContainer>;
}

function CardHeader({ children }: CardProps) {
  return <StyledCardHeaderContainer>{children}</StyledCardHeaderContainer>;
}

function CardContent({ children }: CardProps) {
  return <StyledCardContentContainer>{children}</StyledCardContentContainer>;
}

Card.Header = CardHeader;
Card.Content = CardContent;
