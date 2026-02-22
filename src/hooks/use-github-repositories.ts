import { useQuery } from "@tanstack/react-query";
import { githubService } from "@/service/github-service";
import { useGithubStore } from "@/store/github-store";

export function useGithubRepositories(username: string) {
  const setRepos = useGithubStore((s) => s.setRepos);

  return useQuery({
    queryKey: ["github-repositories", username],
    queryFn: () => githubService.getRepos(username),
    enabled: !!username,
    onSuccess: (data) => setRepos(data),
  });
}
