import { useGithubStarred } from "@/hooks/use-github-starred";
import { CardRepo } from "./ui/card-repo";

export const StarredRepositoriesContent = () => {
  const starredRepos = useGithubStarred("sailleribeiro");

  console.log("Starred Repos:", starredRepos.data);
  const items = starredRepos.data ?? [];
  return (
    <div className="flex flex-col">
      {items.map((repo, index) => (
        <div key={repo.id}>
          <CardRepo repo={repo} variant="starred" className="py-3" />
          {index < items.length - 1 && (
            <div className="h-px w-full bg-border" />
          )}
        </div>
      ))}
    </div>
  );
};
