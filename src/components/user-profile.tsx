import { useState } from "react";
import { useGithubUser } from "@/hooks/use-github-user";
import { Building2, ChevronUp, Link, MapPin } from "lucide-react";

export const UserProfile = () => {
  const user = useGithubUser("sailleribeiro");
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(true);

  return (
    <div className="flex flex-col gap-3 items-center py-4 w-full">
      <img
        src={user.data?.avatar_url}
        alt="avatar"
        className="rounded-full w-32 h-32 shadow-lg"
      />

      <h1 className="text-2xl text-gray-700 font-bold ">{user.data?.name}</h1>
      <span className="text-center text-gray-400 w-56">{user.data?.bio}</span>

      <button
        type="button"
        onClick={() => setIsAdditionalInfoOpen((prev) => !prev)}
        className="text-blue-400 flex flex-col items-center gap-1 cursor-pointer"
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
        className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
          isAdditionalInfoOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 md:bg-transparent p-3 rounded-lg flex flex-col gap-2 text-blue-400">
          <span className="flex gap-3 items-center">
            <Building2 size={18} /> {user.data?.company}
          </span>
          <span className="flex gap-3 items-center">
            <MapPin size={18} /> {user.data?.location}
          </span>
          <span className="flex gap-3 items-center">
            <Link size={18} />
            {user.data?.blog}
          </span>
          <span className="flex gap-3 items-center">{user.data?.email}</span>
        </div>
      </section>
    </div>
  );
};
