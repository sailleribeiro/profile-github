import type { GithubRepo } from "@/types";

export function matchesType(repo: GithubRepo, selectedTypes: string[]) {
  if (selectedTypes.length === 0) return true;

  return selectedTypes.some((type) => {
    if (type === "source") return !repo.fork;
    if (type === "fork") return repo.fork;
    if (type === "archived") return repo.archived;
    if (type === "mirror") return Boolean(repo.mirror_url);
    return false;
  });
}

export function matchesLanguage(repo: GithubRepo, selectedLanguages: string[]) {
  if (selectedLanguages.length === 0) return true;
  if (!repo.language) return false;

  return selectedLanguages.includes(repo.language.toLowerCase());
}

export function matchesSearch(repo: GithubRepo, search: string) {
  const value = search.trim().toLowerCase();
  if (!value) return true;

  const byName = repo.name.toLowerCase().includes(value);
  const byDescription = (repo.description ?? "").toLowerCase().includes(value);

  return byName || byDescription;
}
