import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RepositoriesContent } from "@/components/repositories-content";
import { StarredRepositoriesContent } from "@/components/starred-repositories-content";
import { HomeSkeleton } from "@/components/skeleton/home-skeleton";
import { RepositoriesContentSkeleton } from "@/components/skeleton/repositories-content-skeleton";

import { useGithubStore } from "@/store/github-store";
import { useGithubRepositories } from "@/hooks/use-github-repositories";
import { useGithubStarred } from "@/hooks/use-github-starred";
import { useGithubUser } from "@/hooks/use-github-user";

type HomeProps = {
  username: string;
};

export function Home({ username }: HomeProps) {
  const countRepos = useGithubStore((s) => s.repos.length);
  const countStarredRepos = useGithubStore((s) => s.starredRepos.length);

  const userQuery = useGithubUser(username);
  const reposQuery = useGithubRepositories(username);
  const starredQuery = useGithubStarred(username);

  if (userQuery.isLoading || reposQuery.isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start">
      <UserProfile />

      <Tabs defaultValue="repositories" className="w-full">
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
          {reposQuery.isLoading ? (
            <RepositoriesContentSkeleton />
          ) : (
            <RepositoriesContent />
          )}

          {reposQuery.isError && (
            <div className="text-gray-500 mt-4">
              Ocorreu um erro ao carregar os repositórios...
            </div>
          )}
        </TabsContent>

        <TabsContent value="starred">
          {starredQuery.isLoading ? (
            <RepositoriesContentSkeleton />
          ) : (
            <StarredRepositoriesContent />
          )}

          {starredQuery.isError && (
            <div className="text-gray-500 mt-4">
              Ocorreu um erro ao carregar os repositórios favoritos....
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
