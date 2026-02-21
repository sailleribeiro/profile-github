import { useGithubRepositories } from "@/hooks/use-github-repositories";
import { CardRepo } from "./ui/card-repo";

export const RepositoriesContent = () => {
  const repos = useGithubRepositories("sailleribeiro");
  const items = repos.data ?? [];

  return (
    <div className="flex flex-col">
      {items.map((repo, index) => (
        <div key={repo.id}>
          <CardRepo repo={repo} className="py-3" />
          {index < items.length - 1 && (
            <div className="h-px w-full bg-border" />
          )}
        </div>
      ))}
    </div>
  );
};
