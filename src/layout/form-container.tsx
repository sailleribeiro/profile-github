import { useState } from "react";
import { Search } from "lucide-react";
import { FilterFormRepos } from "@/components/filter-form-repos";
import { Input } from "@/components/ui/input";
import { useGithubStore } from "@/store/github-store";
import { useRepoFilterOptions } from "@/hooks/use-repo-filter-options";

export function FormContainer() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const selectedLanguages = useGithubStore((s) => s.selectedLanguages);
  const selectedTypes = useGithubStore((s) => s.selectedTypes);
  const search = useGithubStore((s) => s.search);

  const setSelectedLanguages = useGithubStore((s) => s.setSelectedLanguages);
  const setSelectedTypes = useGithubStore((s) => s.setSelectedTypes);
  const setSearch = useGithubStore((s) => s.setSearch);

  const [inputValue, setInputValue] = useState(search);

  const { typeOptions, languageOptions } = useRepoFilterOptions();

  const mobilePlaceholder =
    isSearchFocused || inputValue.trim().length > 0
      ? "Type Something Here..."
      : "";

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="w-full">
      <button
        type="submit"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="relative md:hidden">
        <Input
          placeholder={mobilePlaceholder}
          icon={<Search className="text-blue-500" />}
          id="search-input-mobile"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />

        {!isSearchFocused && (
          <div className="absolute left-3 top-1.5 flex flex-row gap-3">
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
        )}
      </div>

      <div className="hidden md:flex md:flex-row md:items-start gap-3">
        <Input
          placeholder="Type Something Here..."
          icon={<Search className="text-blue-500" />}
          id="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
    </form>
  );
}
