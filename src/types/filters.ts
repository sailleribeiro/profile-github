export type RepoType = "source" | "fork" | "archived" | "mirror";

export type FilterOption<T extends string> = {
  value: T;
  label: string;
};
