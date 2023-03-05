import {
  StyledCardContainer,
  StyledCardContentContainer,
  StyledCardHeaderContainer,
} from "./Card.styled";

type BaseCardProps = React.HTMLAttributes<HTMLDivElement>;

interface CardProps extends BaseCardProps {
  minWidth?: string;
}

export function Card({ children, minWidth, ...props }: CardProps) {
  return (
    <StyledCardContainer $minWidth={minWidth} {...props}>
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
