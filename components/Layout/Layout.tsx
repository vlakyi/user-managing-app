import { StyledLayoutContainer } from "./Layout.styled";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
}
