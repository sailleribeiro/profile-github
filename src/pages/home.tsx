import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RepositoriesContent } from "@/components/repositories-content";
import { StarredRepositoriesContent } from "@/components/starred-repositories-content";

import { useGithubStore } from "@/store/github-store";
import { useGithubRepositories } from "@/hooks/use-github-repositories";
import { useGithubStarred } from "@/hooks/use-github-starred";
import { useGithubUser } from "@/hooks/use-github-user";
export function Home() {
  const username = useGithubStore((s) => s.username);
  const countRepos = useGithubStore((s) => s.repos.length);
  const countStarredRepos = useGithubStore((s) => s.starredRepos.length);

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

        <TabsContent value="repositories">
          <RepositoriesContent />
        </TabsContent>

        <TabsContent value="starred">
          <StarredRepositoriesContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
