import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../../services/apiCollection";

export function useCollections() {
  const {
    data: collections,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
  });

  return { collections, isLoading, error };
}
