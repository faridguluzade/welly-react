import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { cart, isLoading, error };
}
