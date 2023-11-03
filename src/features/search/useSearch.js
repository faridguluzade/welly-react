import { useQuery } from "@tanstack/react-query";

import { getSearchProducts } from "../../services/apiSearch";

export const useSearch = (searchValue = "bi") => {
  const { data: products } = useQuery({
    queryKey: ["products", searchValue],
    queryFn: () => getSearchProducts(searchValue),
  });

  return { products };
};
