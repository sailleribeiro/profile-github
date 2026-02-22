import type { GithubRepo } from "@/types";
import { Star, GitFork, Eye } from "lucide-react";

interface CardRepoProps {
  repo: GithubRepo;
  variant?: "default" | "starred";
}

export function CardRepo({ repo, variant = "default" }: CardRepoProps) {
  return (
    <div
      className="hover:shadow-lg p-4 transition-colors cursor-pointer"
      onClick={() => window.open(repo.html_url, "_blank")}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-1">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md"
          >
            {repo.owner.login} /
          </a>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-blue-500 font-semibold hover:underline"
          >
            {repo.name}
          </a>
        </div>

        {repo.private && (
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            Private
          </span>
        )}
      </div>

      {repo.description && (
        <p className="text-gray-600 text-sm mb-3">{repo.description}</p>
      )}

      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-wrap gap-2">
          {variant === "starred" && repo.language && (
            <span className="text-xs py-1">{repo.language}</span>
          )}

          <div className="flex gap-2 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <Star size={16} />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={16} />
              <span>{repo.forks_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{repo.watchers_count}</span>
            </div>
          </div>

          {repo.topics?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {repo.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
