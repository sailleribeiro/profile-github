import { Header } from "@/layout/header";
import { useParams } from "react-router-dom";
import { Home } from "./home";
export function Profile() {
  const { username = "sailleribeiro" } = useParams();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto md:p-6 w-full">
        <Home username={username} />
      </main>
    </>
  );
}
