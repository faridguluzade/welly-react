import { API_URL } from "../utils/config";

export async function getCollections() {
  const res = await fetch(`${API_URL}/collections`);

  if (!res.ok) throw new Error("Could not load the collections");

  const data = res.json();

  return data;
}
