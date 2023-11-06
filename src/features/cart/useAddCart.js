import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCartItem, updateCartItem } from "../../services/apiCart";

export function useAddCart() {
  const queryClient = useQueryClient();

  const { mutate: addItemToCart, status } = useMutation({
    mutationFn: async (data) => {
      const cachedCartData = queryClient.getQueryData(["cart"]);

      const existingItem = cachedCartData.find(
        (item) => item.productId === data.productId
      );

      if (existingItem) {
        const quantity = existingItem.quantity + 1;
        const updatedData = {
          quantity,
          totalPrice: quantity * existingItem.price,
        };
        await updateCartItem(existingItem.id, updatedData);
        return;
      } else {
        await createCartItem({
          ...data,
          quantity: 1,
          totalPrice: data.price * 1,
        });
        return;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return { addItemToCart, isLoading: status === "pending" };
}
