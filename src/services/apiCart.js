import { API_URL } from "../utils/config";

export async function getCart() {
  try {
    const res = await fetch(`${API_URL}/cart`);

    if (!res.ok) throw new Error("Could not load the cart");

    const data = res.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createCartItem(newData) {
  try {
    const res = await fetch(`${API_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!res.ok) throw new Error("Could not add the item to cart");

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateCartItem(id, updatedData) {
  try {
    const res = await fetch(`${API_URL}/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) throw new Error("Could not the update data");

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
