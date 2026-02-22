import { useGithubStore } from "@/store/github-store";
import logo from "../assets/header-logo-git.png";
export const Header = () => {
  const user = useGithubStore((s) => s.user);

  return (
    <header className="hidden md:flex bg-foreground py-3 px-40 flex-row items-center gap-1">
      <img src={logo} alt="GitHub Logo" className="w-32 my-3" />

      <h1 className="text-center text-gray-100 text-xl">
        / {user ? user.login : "profile-github"}
      </h1>
    </header>
  );
};
