import { useMockBrowserWorker } from "./useMockBrowserWorker";

interface MSWClientGuardProps {
  children: React.ReactNode;
}

export function MSWClientGuard({ children }: MSWClientGuardProps) {
  const { shouldRender } = useMockBrowserWorker();

  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
}
