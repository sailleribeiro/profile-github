import { useQuery } from "@tanstack/react-query";
import { githubService } from "@/service/github-service";
import { useGithubStore } from "@/store/github-store";

export function useGithubStarred(username: string) {
  const setStarredRepos = useGithubStore((s) => s.setStarredRepos);

  return useQuery({
    queryKey: ["github-starred-repos", username],
    queryFn: () => githubService.getStarredRepos(username),
    enabled: !!username,
    onSuccess: (data) => setStarredRepos(data),
  });
}
