import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FilterDropdown } from "@/components/ui/filter-dropdown";
import { RepositoriesContent } from "@/components/repositories-content";
import { StarredRepositoriesContent } from "@/components/starred-repositories-content";

import { useGithubStore } from "@/store/github-store";
import { useGithubRepositories } from "@/hooks/use-github-repositories";
import { useGithubStarred } from "@/hooks/use-github-starred";
import { useGithubUser } from "@/hooks/use-github-user";
import { useRepoFilterOptions } from "@/hooks/use-repo-filter-options";
import type { RepoType } from "@/types/filters";

export function Home() {
  const username = useGithubStore((s) => s.username);

  const countRepos = useGithubStore((s) => s.repos.length);
  const countStarredRepos = useGithubStore((s) => s.starredRepos.length);

  const selectedLanguages = useGithubStore((s) => s.selectedLanguages);
  const selectedTypes = useGithubStore((s) => s.selectedTypes);
  const search = useGithubStore((s) => s.search);

  const setSelectedLanguages = useGithubStore((s) => s.setSelectedLanguages);
  const setSelectedTypes = useGithubStore((s) => s.setSelectedTypes);
  const setSearch = useGithubStore((s) => s.setSearch);

  const { typeOptions, languageOptions } = useRepoFilterOptions();

  useGithubUser(username);
  useGithubRepositories(username);
  useGithubStarred(username);

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4 items-center p-4">
      <UserProfile />

      <Tabs defaultValue="repositories">
        <TabsList>
          <TabsTrigger value="repositories">
            <BookMarked size={24} />
            Repositories
            <Badge>{countRepos}</Badge>
          </TabsTrigger>
          <TabsTrigger value="starred">
            <Star size={24} />
            Starred
            <Badge>{countStarredRepos}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="repositories" className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <FilterDropdown<RepoType>
              value={selectedTypes}
              onChange={(value) => setSelectedTypes(value)}
              options={typeOptions}
              placeholder="Type"
            />
            <FilterDropdown<string>
              value={selectedLanguages}
              onChange={setSelectedLanguages}
              options={languageOptions}
              placeholder="Language"
            />
          </div>

          <Input
            placeholder="Type Something Here..."
            icon={<Search className="text-blue-500" />}
            id="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <RepositoriesContent />
        </TabsContent>

        <TabsContent value="starred">
          <StarredRepositoriesContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
