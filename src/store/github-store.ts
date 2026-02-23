import { create } from "zustand";
import type { GithubRepo, GithubUser } from "@/types";
import type { RepoType } from "@/types/filters";

type FilterState = {
  selectedLanguages: string[];
  selectedTypes: RepoType[];
  search: string;
};

const initialFilters: FilterState = {
  selectedLanguages: [],
  selectedTypes: [],
  search: "",
};

type GithubStore = {
  username: string;
  user: GithubUser | null;
  repos: GithubRepo[];
  starredRepos: GithubRepo[];

  filters: {
    repos: FilterState;
    starredRepos: FilterState;
  };

  setUsername: (username: string) => void;
  setUser: (user: GithubUser) => void;
  setRepos: (repos: GithubRepo[]) => void;
  setStarredRepos: (repos: GithubRepo[]) => void;

  setFilter: <K extends keyof FilterState>(
    source: "repos" | "starredRepos",
    key: K,
    value: FilterState[K],
  ) => void;
  resetFilters: (source: "repos" | "starredRepos") => void;
};

export const useGithubStore = create<GithubStore>((set) => ({
  username: "sailleribeiro",
  user: null,
  repos: [],
  starredRepos: [],

  filters: {
    repos: { ...initialFilters },
    starredRepos: { ...initialFilters },
  },

  setUsername: (username) => set({ username }),
  setUser: (user) => set({ user }),
  setRepos: (repos) => set({ repos }),
  setStarredRepos: (starredRepos) => set({ starredRepos }),

  setFilter: (source, key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [source]: {
          ...state.filters[source],
          [key]: value,
        },
      },
    })),

  resetFilters: (source) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [source]: { ...initialFilters },
      },
    })),
}));
