import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Star } from "lucide-react";
import { MultiSelect } from "@/components/ui/multi-select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const languageOptions = [
  { value: "All", label: "All" },
  { value: "java", label: "Java" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
];

export function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <UserProfile />

      <Tabs defaultValue="repositories">
        <TabsList>
          <TabsTrigger value="repositories">
            <BookMarked size={24} />
            Repositories
            <Badge> 123</Badge>
          </TabsTrigger>
          <TabsTrigger value="starred">
            <Star size={24} />
            Starred
            <Badge> 123</Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="repositories">
          <Input placeholder="Type Something Here..." />
          <MultiSelect<string>
            value={languageOptions.map((option) => option.value) || []}
            onChange={() => {}}
            options={languageOptions}
            placeholder="Select language"
          />
        </TabsContent>
        <TabsContent value="starred">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
