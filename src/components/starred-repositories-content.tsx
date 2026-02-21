import { useGithubStarred } from "@/hooks/use-github-starred";

export const StarredRepositoriesContent = () => {
  const starredRepos = useGithubStarred("sailleribeiro");

  console.log("Starred Repos:", starredRepos.data);
  return (
    <div>
      {starredRepos.data?.map((repo) => (
        <div key={repo.id} className="p-3 border rounded-lg mb-2">
          <h2 className="text-lg font-bold">{repo.name}</h2>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
};
