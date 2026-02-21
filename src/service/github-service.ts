import { api } from "@/config/api";
import type { GithubUser } from "@/types";

export const githubService = {
  async getUser(username: string) {
    const response = await api<GithubUser>(`/users/${username}`);
    return response;
  },

  // repos
  async getRepos(username: string) {
    const response = await api(`/users/${username}/repos`);
    return response;
  },

  // starred repos
  async getStarredRepos(username: string) {
    const response = await api(`/users/${username}/starred`);
    return response;
  },
};
