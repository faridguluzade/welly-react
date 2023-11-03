import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const {
    data: cart,
    status,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { cart, status, error };
}
