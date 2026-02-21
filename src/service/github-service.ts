import { api } from "@/config/api";
import type { GithubUser } from "@/types";

export const githubService = {
  async getUser(username: string) {
    const response = await api<GithubUser>(`/users/${username}`);
    return response;
  },
};
