import { BASE_URL } from "../config";

export const getCategory = async (categoryId: string): Promise<TCategory> => {
  const categoryRes = await fetch(BASE_URL + "/category/" + categoryId);
  const category: TCategory = await categoryRes.json();
  return category;
};
