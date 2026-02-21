import { UserProfile } from "@/components/user-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FilterDropdown } from "@/components/ui/filter-dropdown";
import { RepositoriesContent } from "@/components/repositories-content";
import { StarredRepositoriesContent } from "@/components/starred-repositories-content";

const languageOptions = [
  { value: "java", label: "Java" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
];

const typeOptions = [
  { value: "source", label: "Sources" },
  { value: "fork", label: "Forks" },
  { value: "archived", label: "Archived" },
  { value: "mirror", label: "Mirrors" },
];

export function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4 items-center p-4">
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
          <div className="flex flex-wrap items-center gap-3">
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

          <Input
            placeholder="Type Something Here..."
            icon={<Search className="text-blue-500" />}
            id="search-input"
          />

          <RepositoriesContent />
        </TabsContent>

        <TabsContent value="starred">
          <StarredRepositoriesContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
