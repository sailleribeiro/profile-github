import { create } from "zustand";
import type { GithubRepo, GithubUser } from "@/types";

export type RepoType = "source" | "fork" | "archived" | "mirror";

type GithubStore = {
  username: string;
  user: GithubUser | null;
  repos: GithubRepo[];
  starredRepos: GithubRepo[];

  selectedLanguages: string[];
  selectedTypes: RepoType[];
  search: string;

  setUsername: (username: string) => void;
  setUser: (user: GithubUser) => void;
  setRepos: (repos: GithubRepo[]) => void;
  setStarredRepos: (repos: GithubRepo[]) => void;

  setSelectedLanguages: (languages: string[]) => void;
  setSelectedTypes: (types: RepoType[]) => void;
  setSearch: (value: string) => void;
  resetFilters: () => void;
};

export const useGithubStore = create<GithubStore>((set) => ({
  username: "sailleribeiro",
  user: null,
  repos: [],
  starredRepos: [],

  selectedLanguages: [],
  selectedTypes: [],
  search: "",

  setUsername: (username) => set({ username }),
  setUser: (user) => set({ user }),
  setRepos: (repos) => set({ repos }),
  setStarredRepos: (starredRepos) => set({ starredRepos }),

  setSelectedLanguages: (selectedLanguages) => set({ selectedLanguages }),
  setSelectedTypes: (selectedTypes) => set({ selectedTypes }),
  setSearch: (search) => set({ search }),
  resetFilters: () =>
    set({
      selectedLanguages: [],
      selectedTypes: [],
      search: "",
    }),
}));
