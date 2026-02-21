import { api } from "@/config/api";
import type { GithubUser } from "@/types";

export function getUser(username: string) {
  return api<GithubUser>(`/users/${username}`);
}
