import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardHeaderContainer,
} from "./Card.styled";

type BaseCardProps = React.HTMLAttributes<HTMLDivElement>;

interface CardProps extends BaseCardProps {
  maxWidth?: string;
}

export function Card({ children, maxWidth, ...props }: CardProps) {
  return (
    <StyledCardContainer $maxWidth={maxWidth} {...props}>
      {children}
    </StyledCardContainer>
  );
}

function CardHeader({ children, ...props }: BaseCardProps) {
  return (
    <StyledCardHeaderContainer {...props}>{children}</StyledCardHeaderContainer>
  );
}

function CardContent({ children, ...props }: BaseCardProps) {
  return (
    <StyledCardContentContainer {...props}>
      {children}
    </StyledCardContentContainer>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
