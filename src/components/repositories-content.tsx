import { useMemo } from "react";
import { useGithubStore } from "@/store/github-store";
import { CardRepo } from "./ui/card-repo";
import { matchesLanguage, matchesSearch, matchesType } from "@/utils/filters";
import { FormContainer } from "@/layout/form-container";

export const RepositoriesContent = () => {
  const repos = useGithubStore((s) => s.repos);
  const selectedLanguages = useGithubStore((s) => s.selectedLanguages);
  const selectedTypes = useGithubStore((s) => s.selectedTypes);
  const search = useGithubStore((s) => s.search);

  const items = useMemo(
    () =>
      repos.filter(
        (repo) =>
          matchesType(repo, selectedTypes) &&
          matchesLanguage(repo, selectedLanguages) &&
          matchesSearch(repo, search),
      ),
    [repos, selectedTypes, selectedLanguages, search],
  );

  return (
    <section className="space-y-3">
      <FormContainer />
      <div className="flex flex-col">
        {items.map((repo, index) => (
          <div key={repo.id}>
            <CardRepo repo={repo} className="py-3" />
            {index < items.length - 1 && (
              <div className="h-px w-full bg-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
