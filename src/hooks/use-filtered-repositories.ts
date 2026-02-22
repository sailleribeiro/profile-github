import { useMemo } from "react";
import { useGithubStore } from "@/store/github-store";
import { matchesLanguage, matchesSearch, matchesType } from "@/utils/filters";
import type { GithubRepo } from "@/types";

type RepositorySource = "repos" | "starredRepos";

export function useFilteredRepositories(
  source: RepositorySource,
): GithubRepo[] {
  const repositories = useGithubStore((s) => s[source]);
  const selectedLanguages = useGithubStore((s) => s.selectedLanguages);
  const selectedTypes = useGithubStore((s) => s.selectedTypes);
  const search = useGithubStore((s) => s.search);

  return useMemo(
    () =>
      repositories.filter(
        (repo) =>
          matchesType(repo, selectedTypes) &&
          matchesLanguage(repo, selectedLanguages) &&
          matchesSearch(repo, search),
      ),
    [repositories, selectedTypes, selectedLanguages, search],
  );
}
