import { API_URL } from "../utils/config";

export async function getCart() {
  const res = await fetch(`${API_URL}/cart`);

  if (!res.ok) throw new Error("Could not load the cart");

  const data = res.json();

  return data;
}

export async function addItemToCart(newData) {
  try {
    const res = await fetch(`${API_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...newData,
        quantity: 1,
        totalPrice: newData.price * 1,
      }),
    });

    if (!res.ok) throw new Error("Could not add the item to cart");

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteItem(id) {
  try {
    const res = await fetch(`${API_URL}/cart/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Could not the delete product");
  } catch (error) {
    throw new Error(error.message);
  }
}
