import { API_URL } from "../utils/config";

export async function getSearchProducts(query) {
  try {
    const res = await fetch(`${API_URL}/products?name_like=${query}`);

    if (!res.ok) throw new Error(`Could not find the products for ${query}`);

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
