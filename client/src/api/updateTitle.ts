import { BASE_URL } from "../config";

export const updatedTitle = async (
  title: string,
  categoryId: string
): Promise<TCategory> => {
  const response = await fetch(BASE_URL + "/category/" + categoryId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const newTitle: TCategory = await response.json();
  return newTitle;
};
