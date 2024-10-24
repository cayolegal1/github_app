import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";


const useGetUsers = (value: string) => {
  const { data, isFetching: isLoading } = useQuery({
    queryKey: ["users", value],
    queryFn: () => get(""),
    initialData: [],
    initialDataUpdatedAt: 0,
  });

  return {
    data,
    isLoading,
  };
};

export default useGetUsers;
