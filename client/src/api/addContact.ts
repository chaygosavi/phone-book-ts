import { BASE_URL } from "../config";

export const addContact = async (
  categoryId: string,
  name: string,
  description: string,
  number: string
): Promise<TCategory> => {
  const response = await fetch(
    BASE_URL + "/category/" + categoryId + "/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, number }),
    }
  );
  const newContact: TCategory = await response.json();
  return newContact;
};
