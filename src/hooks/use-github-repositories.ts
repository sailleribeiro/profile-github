import { useQuery } from "@tanstack/react-query";
import { githubService } from "@/service/github-service";

export function useGithubRepositories(username: string) {
  return useQuery({
    queryKey: ["github-repositories", username],
    queryFn: () => githubService.getRepos(username),
    enabled: !!username,
  });
}
