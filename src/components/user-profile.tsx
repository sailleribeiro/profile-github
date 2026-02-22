import { useState } from "react";
import { Building2, ChevronUp, Link, MapPin, UserRoundX } from "lucide-react";
import { useGithubStore } from "@/store/github-store";

export const UserProfile = () => {
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(true);
  const user = useGithubStore((s) => s.user);

  return (
    <div className="flex flex-col gap-3 items-center py-4 md:px-2 w-full md:max-w-2/5">
      {user?.avatar_url ? (
        <img
          src={user?.avatar_url}
          alt="avatar"
          className="rounded-full w-32 h-32 md:w-48 md:h-48"
        />
      ) : (
        <div className="rounded-full w-32 h-32 md:w-48 md:h-48 bg-gray-100 flex items-center justify-center">
          <UserRoundX />
        </div>
      )}

      <h1 className="text-2xl text-gray-700 font-bold ">{user?.name}</h1>
      <span className="text-center text-gray-400 w-56  md:w-full">
        {user?.bio}
      </span>

      <button
        type="button"
        onClick={() => setIsAdditionalInfoOpen((prev) => !prev)}
        className="text-blue-400 flex flex-col items-center gap-1 cursor-pointer md:hidden"
        aria-expanded={isAdditionalInfoOpen}
      >
        <p>Informações Adicionais</p>
        <ChevronUp
          size={24}
          className={`transition-transform duration-300 ${
            isAdditionalInfoOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <section
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:overflow-visible md:max-h-none md:opacity-100 ${
          isAdditionalInfoOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 md:bg-transparent p-3 md:px-5 rounded-lg flex flex-col gap-2 text-blue-500">
          {user?.company && (
            <span className="flex gap-3 items-center">
              <Building2 size={18} /> {user?.company}
            </span>
          )}

          {user?.location && (
            <span className="flex gap-3 items-center">
              <MapPin size={18} /> {user?.location}
            </span>
          )}

          {user?.blog && (
            <a
              href={user?.blog}
              className="flex gap-3 items-center hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link size={18} />
              {user?.blog}
            </a>
          )}

          {user?.email && (
            <span className="flex gap-3 items-center">{user?.email}</span>
          )}
        </div>
      </section>
    </div>
  );
};
