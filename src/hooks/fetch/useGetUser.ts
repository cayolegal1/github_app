import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import type { UserResponse } from "@/types/users";

const useGetUser = (value: string) => {
  const { data, isLoading } = useQuery<UserResponse>({
    queryKey: ["users", value],
    queryFn: () => get("https://api.github.com/users/" + value),
  });

  return {
    data,
    isLoading,
  };
};

export default useGetUser;
