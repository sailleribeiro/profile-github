import { useGithubRepositories } from "@/hooks/use-github-repositories";
import { CardRepo } from "./ui/card-repo";
export const RepositoriesContent = () => {
  const repos = useGithubRepositories("sailleribeiro");
  return (
    <div className="flex flex-col gap-2">
      {repos.data?.map((repo) => (
        <CardRepo key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
