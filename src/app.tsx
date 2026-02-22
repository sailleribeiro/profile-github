import { QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { queryClient } from "./lib/react-query";
import { Profile } from "./pages/profile";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/sailleribeiro" replace />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </QueryClientProvider>
  );
}
