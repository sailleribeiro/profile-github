import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { Home } from "./pages/home";
import { Header } from "./layout/header";
export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className="max-w-7xl mx-auto p-6 w-full">
          <Home />
        </main>
      </QueryClientProvider>
    </>
  );
}
