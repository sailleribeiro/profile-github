import { useGithubUser } from "@/hooks/use-github-user";

export function Home() {
  const user = useGithubUser("sailleribeiro");

  console.log(user);

  return (
    <div className="flex flex-col gap-4 items-center bg-accent">
      <img
        src={user.data?.avatar_url}
        alt="avatar"
        className="rounded-full w-32 h-32"
      />
      <h6 className="text-lg font-semibold">{user.data?.name}</h6>
      <span className="text-muted-foreground font-normal">
        {user.data?.bio}
      </span>
    </div>
  );
}
