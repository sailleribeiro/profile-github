import { RepositoriesContentSkeleton } from "@/components/skeleton/repositories-content-skeleton";
import { UserProfileSkeleton } from "@/components/skeleton/user-profile-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start">
      <UserProfileSkeleton />

      <div className="w-full space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-10 w-44 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
        <RepositoriesContentSkeleton />
      </div>
    </div>
  );
}
