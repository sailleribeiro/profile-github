import { useQuery } from "@tanstack/react-query";
import { githubService } from "@/service/github-service";

export function useGithubStarred(username: string) {
  return useQuery({
    queryKey: ["github-starred-repos", username],
    queryFn: () => githubService.getStarredRepos(username),
    enabled: !!username,
  });
}
