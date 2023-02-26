import { BASE_URL } from "../config";

export const addCategory = async (category: string): Promise<TCategory> => {
  const response = await fetch(BASE_URL + "/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category }),
  });
  const newCategory: TCategory = await response.json();
  return newCategory;
};
