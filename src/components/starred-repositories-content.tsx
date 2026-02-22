import { useMemo } from "react";
import { useGithubStore } from "@/store/github-store";
import { CardRepo } from "./ui/card-repo";
import { matchesLanguage, matchesSearch, matchesType } from "@/utils/filters";

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
