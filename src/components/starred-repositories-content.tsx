import { useMemo } from "react";
import type { GithubRepo } from "@/types";
import { useGithubStore } from "@/store/github-store";
import { CardRepo } from "./ui/card-repo";

function matchesType(repo: GithubRepo, selectedTypes: string[]) {
  if (selectedTypes.length === 0) return true;

  return selectedTypes.some((type) => {
    if (type === "source") return !repo.fork;
    if (type === "fork") return repo.fork;
    if (type === "archived") return repo.archived;
    if (type === "mirror") return Boolean(repo.mirror_url);
    return false;
  });
}

function matchesLanguage(repo: GithubRepo, selectedLanguages: string[]) {
  if (selectedLanguages.length === 0) return true;
  if (!repo.language) return false;

  return selectedLanguages.includes(repo.language.toLowerCase());
}

function matchesSearch(repo: GithubRepo, search: string) {
  const value = search.trim().toLowerCase();
  if (!value) return true;

  const byName = repo.name.toLowerCase().includes(value);
  const byDescription = (repo.description ?? "").toLowerCase().includes(value);

  return byName || byDescription;
}

export const StarredRepositoriesContent = () => {
  const starredRepos = useGithubStore((s) => s.starredRepos);
  const selectedLanguages = useGithubStore((s) => s.selectedLanguages);
  const selectedTypes = useGithubStore((s) => s.selectedTypes);
  const search = useGithubStore((s) => s.search);

  const items = useMemo(
    () =>
      starredRepos.filter(
        (repo) =>
          matchesType(repo, selectedTypes) &&
          matchesLanguage(repo, selectedLanguages) &&
          matchesSearch(repo, search),
      ),
    [starredRepos, selectedTypes, selectedLanguages, search],
  );

  return (
    <div className="flex flex-col">
      {items.map((repo, index) => (
        <div key={repo.id}>
          <CardRepo repo={repo} variant="starred" className="py-3" />
          {index < items.length - 1 && (
            <div className="h-px w-full bg-border" />
          )}
        </div>
      ))}
    </div>
  );
};
