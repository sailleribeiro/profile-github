import { useGithubUser } from "@/hooks/use-github-user";
import { useState } from "react";

export function Home() {
  const [username, setUsername] = useState("octocat");
  const user = useGithubUser(username);

  console.log(user);

  return (
    <div>
      <h1>Profile Github</h1>
      <h2>Digite o nome de usuário do Github:</h2>
      <span>{user.data?.name}</span>
    </div>
  );
}
