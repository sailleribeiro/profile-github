import { githubService } from "@/service/github-service";
import { useQuery } from "@tanstack/react-query";

export function useGithubUser(username: string) {
  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () => githubService.getUser(username),
    enabled: !!username,
  });
}
