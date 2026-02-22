import { Skeleton } from "@/components/ui/skeleton";

export function UserProfileSkeleton() {
  return (
    <div className="flex w-full flex-col items-center gap-3 py-4 md:max-w-2/5 md:px-2">
      <Skeleton className="h-32 w-32 rounded-full md:h-48 md:w-48" />
      <Skeleton className="h-8 w-56" />
      <Skeleton className="h-4 w-56 md:w-72" />
      <Skeleton className="h-4 w-44 md:w-64" />

      <section className="w-full">
        <div className="flex flex-col gap-3 rounded-lg bg-gray-50 p-3 md:bg-transparent md:px-5">
          <Skeleton className="h-5 w-52" />
          <Skeleton className="h-5 w-44" />
          <Skeleton className="h-5 w-56" />
          <Skeleton className="h-5 w-40" />
        </div>
      </section>
    </div>
  );
}
