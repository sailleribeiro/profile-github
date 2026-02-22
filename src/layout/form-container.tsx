import { Search } from "lucide-react";
import { FilterFormRepos } from "@/components/filter-form-repos";
import { Input } from "@/components/ui/input";
import { useGithubStore } from "@/store/github-store";
import { useRepoFilterOptions } from "@/hooks/use-repo-filter-options";

export function FormContainer() {
  const selectedLanguages = useGithubStore((s) => s.selectedLanguages);
  const selectedTypes = useGithubStore((s) => s.selectedTypes);
  const search = useGithubStore((s) => s.search);

  const setSelectedLanguages = useGithubStore((s) => s.setSelectedLanguages);
  const setSelectedTypes = useGithubStore((s) => s.setSelectedTypes);
  const setSearch = useGithubStore((s) => s.setSearch);

  const { typeOptions, languageOptions } = useRepoFilterOptions();

  return (
    <>
      <div className="flex flex-col items-start md:flex-row gap-3">
        <Input
          placeholder="Type Something Here..."
          icon={<Search className="text-blue-500" />}
          id="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-row gap-3">
          <FilterFormRepos
            value={selectedTypes}
            onChange={setSelectedTypes}
            options={typeOptions}
            placeholder="Type"
          />
          <FilterFormRepos
            value={selectedLanguages}
            onChange={setSelectedLanguages}
            options={languageOptions}
            placeholder="Language"
          />
        </div>
      </div>
    </>
  );
}
