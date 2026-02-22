import { FormContainerSkeleton } from "@/components/skeleton/form-container-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

interface RepositoriesContentSkeletonProps {
  items?: number;
}

export function RepositoriesContentSkeleton({
  items = 6,
}: RepositoriesContentSkeletonProps) {
  return (
    <section className="space-y-3">
      <FormContainerSkeleton />

      <div className="flex flex-col">
        {Array.from({ length: items }).map((_, index) => (
          <div key={index}>
            <div className="space-y-3 py-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-28" />
                  <Skeleton className="h-5 w-36" />
                </div>
                <Skeleton className="h-6 w-16 rounded-md" />
              </div>

              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />

              <div className="flex flex-wrap items-center gap-3">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-6 w-16 rounded-md" />
                <Skeleton className="h-6 w-20 rounded-md" />
              </div>
            </div>

            {index < items - 1 && <div className="h-px w-full bg-border" />}
          </div>
        ))}
      </div>
    </section>
  );
}
