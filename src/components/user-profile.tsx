import { useGithubUser } from "@/hooks/use-github-user";
import { ChevronDown } from "lucide-react";

export const UserProfile = () => {
  const user = useGithubUser("sailleribeiro");

  return (
    <div className="flex flex-col gap-3 items-center py-4">
      <img
        src={user.data?.avatar_url}
        alt="avatar"
        className="rounded-full w-32 h-32 shadow-lg"
      />

      <h1 className="text-2xl text-gray-700 font-bold ">{user.data?.name}</h1>
      <span className="text-center text-gray-400 w-56">{user.data?.bio}</span>

      <div className="text-blue-400 flex flex-col items-center gap-1 cursor-pointer">
        <p>Informações Adicionais</p>
        <ChevronDown size={24} />
      </div>
    </div>
  );
};
