import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FilterDropdown } from "@/components/ui/filter-dropdown";

const languageOptions = [
  { value: "java", label: "Java" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
];

const typeOptions = [
  { value: "source", label: "Source" },
  { value: "fork", label: "Fork" },
  { value: "archived", label: "Archived" },
  { value: "mirror", label: "Mirror" },
];

export function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <UserProfile />

      <Tabs defaultValue="repositories">
        <TabsList>
          <TabsTrigger value="repositories">
            <BookMarked size={24} />
            Repositories
            <Badge>123</Badge>
          </TabsTrigger>
          <TabsTrigger value="starred">
            <Star size={24} />
            Starred
            <Badge>123</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="repositories" className="space-y-3">
          <Input
            placeholder="Type Something Here..."
            endIcon={<Search className="text-blue-500" />}
          />

          <div className="flex gap-3">
            <FilterDropdown<string>
              value={selectedType}
              onChange={setSelectedType}
              options={typeOptions}
              placeholder="Type"
            />

            <FilterDropdown<string>
              value={selectedLanguage}
              onChange={setSelectedLanguage}
              options={languageOptions}
              placeholder="Language"
            />
          </div>
        </TabsContent>

        <TabsContent value="starred">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
