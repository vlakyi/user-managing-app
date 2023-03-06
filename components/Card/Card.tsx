import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardHeaderContainer,
} from "./Card.styled";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: CardProps) {
  return <StyledCardContainer {...props}>{children}</StyledCardContainer>;
}

export function CardHeader({ children, ...props }: CardProps) {
  return (
    <StyledCardHeaderContainer {...props}>{children}</StyledCardHeaderContainer>
  );
}

export function CardContent({ children, ...props }: CardProps) {
  return (
    <StyledCardContentContainer {...props}>
      {children}
    </StyledCardContentContainer>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
