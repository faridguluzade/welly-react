import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCartItem } from "../../services/apiCart";

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  const { mutate: updateCart, isLoading: isUpdating } = useMutation({
    mutationFn: async ({ id, updatedData }) => {
      await updateCartItem(id, updatedData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return { updateCart, isUpdating };
};
