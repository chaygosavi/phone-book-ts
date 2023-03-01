import { BASE_URL } from "../config";

export const deleteContact = async (
  categoryId: string,
  contactId: string
): Promise<TCategory> => {
  const res = await fetch(BASE_URL + "/category/" + categoryId + "/contact", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contactId }),
  });

  const deletedContact = await res.json();
  return deletedContact;
};
