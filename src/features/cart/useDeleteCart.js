import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteItem as deleteItemApi } from "../../services/apiCart";

export const useDeleteCart = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isLoading: isDeleting } = useMutation({
    mutationFn: deleteItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return { deleteItem, isDeleting };
};
