import { BASE_URL } from "../config";

export const deleteCategory = async (
  categoryId: string
): Promise<TCategory> => {
  const res = await fetch(BASE_URL + "/category", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ categoryId }),
  });

  const deletedCategory = await res.json();
  return deletedCategory;
};
