import { useGithubStore } from "@/store/github-store";

export const Header = () => {
  const user = useGithubStore((s) => s.user);

  return (
    <header className="bg-foreground py-3 px-32 flex flex-row items-center gap-1">
      <img
        src="/src/assets/header-logo-git.png"
        alt="GitHub Logo"
        className="w-32 my-3"
      />

      <h1 className="text-center text-gray-100 text-xl">
        / {user ? user.login : "profile-github"}
      </h1>
    </header>
  );
};
