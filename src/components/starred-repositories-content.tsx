import { CardRepo } from "./ui/card-repo";
import { FormContainer } from "@/layout/form-container";
import { useFilteredRepositories } from "@/hooks/use-filtered-repositories";

export const StarredRepositoriesContent = () => {
  const items = useFilteredRepositories("starredRepos");

  return (
    <section className="space-y-3">
      <FormContainer source="starredRepos" />

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
    </section>
  );
};
