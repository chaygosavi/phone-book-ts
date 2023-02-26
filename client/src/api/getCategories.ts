import { BASE_URL } from "../config";

export const getCategories = async (): Promise<TCategory[]> => {
  const res = await fetch(BASE_URL + "/category", {
    method: "GET",
  });
  const categories = await res.json();
  return categories;
};
