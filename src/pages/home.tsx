import { UserProfile } from "@/components/user-profile";
export function Home() {
  return (
    <div className="flex flex-col gap-4 items-center py-4">
      <UserProfile />
    </div>
  );
}
