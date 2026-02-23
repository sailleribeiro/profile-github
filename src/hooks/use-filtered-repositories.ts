import { useMemo } from "react";
import { useGithubStore } from "@/store/github-store";
import { matchesLanguage, matchesSearch, matchesType } from "@/utils/filters";
import type { GithubRepo } from "@/types";

type RepositorySource = "repos" | "starredRepos";

export function useFilteredRepositories(
  source: RepositorySource,
): GithubRepo[] {
  const repositories = useGithubStore((s) => s[source]);
  const filters = useGithubStore((s) => s.filters[source]);

  return useMemo(
    () =>
      repositories.filter(
        (repo) =>
          matchesType(repo, filters.selectedTypes) &&
          matchesLanguage(repo, filters.selectedLanguages) &&
          matchesSearch(repo, filters.search),
      ),
    [repositories, filters],
  );
}
