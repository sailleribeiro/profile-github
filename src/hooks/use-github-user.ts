import { githubService } from "@/service/github-service";
import { useQuery } from "@tanstack/react-query";
import { useGithubStore } from "@/store/github-store";

export function useGithubUser(username: string) {
  const setUser = useGithubStore((s) => s.setUser);

  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () => githubService.getUser(username),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => setUser(data),
  });
}
