import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Profile Github</h1>
      </QueryClientProvider>
    </>
  );
}
