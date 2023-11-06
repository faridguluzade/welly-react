import { API_URL } from "../utils/config";

export async function getCollections() {
  try {
    const res = await fetch(`${API_URL}/collections/?_embed=products`);

    if (!res.ok) throw new Error("Could not load the collections");

    const data = res.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
