import React, { FormEvent, useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteCategory } from "../api/deleteCategory";
import { Context } from "../App";

type Props = {
  categoryId: string;
  category: string;
  contacts: TContact[];
};

export const Category = ({ category, categoryId, contacts }: Props) => {
  const { categories, setCategories } = useContext(Context);

  const handleDeleteCategory = async (e: FormEvent) => {
    e.preventDefault();
    console.log("categoryId", categoryId);
    const deletedCategory = await deleteCategory(categoryId);
    const tempCategory = categories?.filter(
      (category) => category._id !== deletedCategory._id
    );

    setCategories(tempCategory as TCategory[]);
  };

  return (
    <div className="bg-transparent border p-2 rounded-lg flex flex-col">
      <h1 className="font-bold text-yellow-500 text-2xl text-center capitalize">
        {category}
      </h1>
      <div className="flex items-center space-x-2">
        <FaUserAlt />
        <p className="text-yellow-500">Contacts : {contacts?.length}</p>
      </div>
      <form className="flex space-x-2 mt-auto">
        <Link
          className="p-2 bg-green-500 rounded-lg flex-1 text-center"
          to={`/category/${categoryId}`}
        >
          View
        </Link>
        <button
          className="p-2 flex-1 bg-red-500 rounded-lg"
          onClick={handleDeleteCategory}
        >
          Delete
        </button>
      </form>
    </div>
  );
};
