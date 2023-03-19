import { useEffect, useState } from "react";

// Disable mocking to see SSR in action
const isMockingEnabled = process.env.NODE_ENV === "development";

export function useMockBrowserWorker() {
  const [shouldRender, setShouldRender] = useState(!isMockingEnabled);

  useEffect(() => {
    (async () => {
      if (process.env.NODE_ENV === "development") {
        // turning on the mock server
        // Be careful not to visit before the mock server is turned on.
        const { worker } = await import("../mocks/browser");
        worker.start();

        setShouldRender(true);
      }
    })();
  }, []);

  return { shouldRender };
}
