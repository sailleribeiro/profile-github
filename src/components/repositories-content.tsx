import { useGithubRepositories } from "@/hooks/use-github-repositories";

export const RepositoriesContent = () => {
  const repos = useGithubRepositories("sailleribeiro");
  return (
    <div>
      {repos.data?.map((repo) => (
        <div key={repo.id} className="p-3 border rounded-lg mb-2">
          <h2 className="text-lg font-bold">{repo.name}</h2>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
};
