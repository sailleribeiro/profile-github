import { useState } from "react";
import { Search } from "lucide-react";
import { FilterFormRepos } from "@/components/filter-form-repos";
import { Input } from "@/components/ui/input";
import { useGithubStore } from "@/store/github-store";
import { useRepoFilterOptions } from "@/hooks/use-repo-filter-options";

type FormContainerProps = {
  source: "repos" | "starredRepos";
};

export function FormContainer({ source }: FormContainerProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filters = useGithubStore((s) => s.filters[source]);
  const setFilter = useGithubStore((s) => s.setFilter);

  const [inputValue, setInputValue] = useState(filters.search);

  const { typeOptions, languageOptions } = useRepoFilterOptions(source);

  const mobilePlaceholder =
    isSearchFocused || inputValue.trim().length > 0
      ? "Type Something Here..."
      : "";

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(source, "search", inputValue);
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
          id={`search-input-mobile-${source}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />

        {!isSearchFocused && (
          <div className="absolute left-3 top-1.5 flex flex-row gap-3">
            <FilterFormRepos
              value={filters.selectedTypes}
              onChange={(val) => setFilter(source, "selectedTypes", val)}
              options={typeOptions}
              placeholder="Type"
            />
            <FilterFormRepos
              value={filters.selectedLanguages}
              onChange={(val) => setFilter(source, "selectedLanguages", val)}
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
          id={`search-input-${source}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="flex flex-row gap-3">
          <FilterFormRepos
            value={filters.selectedTypes}
            onChange={(val) => setFilter(source, "selectedTypes", val)}
            options={typeOptions}
            placeholder="Type"
          />
          <FilterFormRepos
            value={filters.selectedLanguages}
            onChange={(val) => setFilter(source, "selectedLanguages", val)}
            options={languageOptions}
            placeholder="Language"
          />
        </div>
      </div>
    </form>
  );
}
