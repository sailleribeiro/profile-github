import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Star } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <UserProfile />

      <Tabs defaultValue="repositories">
        <TabsList>
          <TabsTrigger value="repositories">
            <BookMarked size={24} />
            Repositories
            <div className="flex text-sm justify-center text-gray-400 bg-gray-50 w-10 border border-gray-300 rounded-full px-6 py-1 ">
              123
            </div>
          </TabsTrigger>
          <TabsTrigger value="starred">
            <Star size={24} />
            Starred
            <div className="flex text-sm justify-center text-gray-400 bg-gray-50 w-10 border border-gray-300 rounded-full px-6 py-1 ">
              123
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="repositories">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="starred">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
