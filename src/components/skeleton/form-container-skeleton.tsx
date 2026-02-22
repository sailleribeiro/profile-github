import { Skeleton } from "@/components/ui/skeleton";

export function FormContainerSkeleton() {
  return (
    <>
      <div className="relative md:hidden">
        <Skeleton className="h-11 w-full rounded-lg" />
        <div className="absolute left-3 top-1/2 flex -translate-y-1/2 gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-28 rounded-full" />
        </div>
      </div>

      <div className="hidden gap-3 md:flex md:flex-row md:items-start">
        <Skeleton className="h-11 w-105 rounded-lg" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-24 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>
    </>
  );
}
