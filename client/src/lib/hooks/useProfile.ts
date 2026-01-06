import { useQuery } from "@tanstack/react-query";
import type { Profile } from "../types";
import agent from "../api/agent";

export const useProfile = (id?: string) => {
  const { data: profile, isLoading: loadingProfile } = useQuery<Profile>({
    queryKey: ["[profile", id],
    queryFn: async () => {
      const response = await agent.get<Profile>(`/profiles/${id}`);
      return response.data;
    },
  });
  return {
    profile,
    loadingProfile,
  };
};
