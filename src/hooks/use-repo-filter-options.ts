import { useMemo } from "react";
import { useGithubStore } from "@/store/github-store";
import type { FilterOption, RepoType } from "@/types/filters";

export function useRepoFilterOptions(source: "repos" | "starredRepos") {
  const items = useGithubStore((s) => s[source]);

  const languageOptions = useMemo<FilterOption<string>[]>(() => {
    const languages = Array.from(
      new Set(
        items
          .map((repo) => repo.language)
          .filter((lang): lang is string => Boolean(lang))
          .map((lang) => lang.toLowerCase()),
      ),
    ).sort();

    return languages.map((lang) => ({ value: lang, label: lang }));
  }, [items]);

  const typeOptions = useMemo<FilterOption<RepoType>[]>(() => {
    const hasSource = items.some((repo) => !repo.fork);
    const hasFork = items.some((repo) => repo.fork);
    const hasArchived = items.some((repo) => repo.archived);
    const hasMirror = items.some((repo) => Boolean(repo.mirror_url));

    return [
      hasSource ? { value: "source", label: "Sources" } : null,
      hasFork ? { value: "fork", label: "Forks" } : null,
      hasArchived ? { value: "archived", label: "Archived" } : null,
      hasMirror ? { value: "mirror", label: "Mirrors" } : null,
    ].filter((x): x is FilterOption<RepoType> => x !== null);
  }, [items]);

  return { languageOptions, typeOptions };
}
