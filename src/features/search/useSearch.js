import { useQuery } from "@tanstack/react-query";

import { getSearchProducts } from "../../services/apiSearch";

export const useSearch = (searchValue) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", searchValue],
    queryFn: () => getSearchProducts(searchValue),
  });

  return { products, isLoading };
};
