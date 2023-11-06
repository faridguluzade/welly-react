import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/apiCollections";

export function useCollections() {
  const { data: collections, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
  });

  return { collections, isLoading };
}
