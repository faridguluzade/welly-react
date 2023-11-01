import { API_URL } from "../utils/config";

export async function getCart() {
  const res = await fetch(`${API_URL}/cart`);

  if (!res.ok) throw new Error("Could not load the cart");

  const data = res.json();

  return data;
}
