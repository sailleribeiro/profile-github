import { CardRepo } from "./ui/card-repo";
import { FormContainer } from "@/layout/form-container";
import { useFilteredRepositories } from "@/hooks/use-filtered-repositories";

export const RepositoriesContent = () => {
  const items = useFilteredRepositories("repos");

  return (
    <section className="space-y-3">
      <FormContainer source="repos" />

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
