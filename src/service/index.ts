import { env } from "@/config/env";
import type { GithubUser } from "@/types";

async function githubFetch<T>(path: string): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  const response = await fetch(`${env.API_GITHUB_URL}${path}`, { headers });

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}

export function getUser(username: string) {
  return githubFetch<GithubUser>(`/users/${username}`);
}
