import { useMemo } from "react";
import { useGithubStore } from "@/store/github-store";
import type { FilterOption, RepoType } from "@/types/filters";
export function useRepoFilterOptions() {
  const repos = useGithubStore((s) => s.repos);
  const starredRepos = useGithubStore((s) => s.starredRepos);

  const allRepos = useMemo(
    () => [...repos, ...starredRepos],
    [repos, starredRepos],
  );

  const languageOptions = useMemo<FilterOption<string>[]>(() => {
    const languages = Array.from(
      new Set(
        allRepos
          .map((repo) => repo.language)
          .filter((lang): lang is string => Boolean(lang))
          .map((lang) => lang.toLowerCase()),
      ),
    ).sort();

    return languages.map((lang) => ({ value: lang, label: lang }));
  }, [allRepos]);

  const typeOptions = useMemo<FilterOption<RepoType>[]>(() => {
    const hasSource = allRepos.some((repo) => !repo.fork);
    const hasFork = allRepos.some((repo) => repo.fork);
    const hasArchived = allRepos.some((repo) => repo.archived);
    const hasMirror = allRepos.some((repo) => Boolean(repo.mirror_url));

    return [
      hasSource ? { value: "source", label: "Sources" } : null,
      hasFork ? { value: "fork", label: "Forks" } : null,
      hasArchived ? { value: "archived", label: "Archived" } : null,
      hasMirror ? { value: "mirror", label: "Mirrors" } : null,
    ].filter((x): x is FilterOption<RepoType> => x !== null);
  }, [allRepos]);

  return { languageOptions, typeOptions };
}
