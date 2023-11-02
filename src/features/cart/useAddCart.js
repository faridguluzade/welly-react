import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addItemToCart as addItemToCartApi } from "../../services/apiCart";

export function useAddCart() {
  const queryClient = useQueryClient();

  const cachedCartData = queryClient.getQueryData(["cart"]);

  console.log(cachedCartData);

  const { mutate: addItemToCart, isLoading } = useMutation({
    mutationFn: addItemToCartApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return { addItemToCart, isLoading };
}
