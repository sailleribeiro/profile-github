import { create } from "zustand";
import type { GithubRepo, GithubUser } from "@/types";

type RepoType = "source" | "fork" | "archived" | "mirror";

type GithubState = {
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

  setSelectedLanguages: (langs: string[]) => void;
  setSelectedTypes: (types: RepoType[]) => void;
  setSearch: (value: string) => void;
};

export const useGithubStore = create<GithubState>((set) => ({
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
}));
