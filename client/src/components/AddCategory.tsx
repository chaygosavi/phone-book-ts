import { FormEvent, useContext, useState } from "react";
import { addCategory } from "../api/addCategory";
import { Context } from "../App";
import { Category } from "./Category";

export const AddCategory = () => {
  const [category, setCategory] = useState("");
  const { categories, setCategories } = useContext(Context);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newCategory = await addCategory(category);
    setCategories([...categories!, newCategory]);
    setCategory("");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-x-2 p-10 flex items-center flex-col"
      >
        <img
          className="h-20 w-20 -rotate-12"
          src="https://www.svgrepo.com/show/281560/phone-book-notepad.svg"
          alt="Phone Book"
        />
        <h1 className="text-2xl text-white my-2 tracking-widest text-center">
          Contact Book
        </h1>

        <div className="space-x-2 text-center">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Add Category"
            className="p-2 rounded-lg outline-none focus:outline-yellow-500"
          />
          <button className="p-2 bg-orange-400 rounded-lg">Add Category</button>
        </div>
      </form>
      <div className="grid grid-cols-4 space-x-2">
        {categories?.map((category) => (
          <Category
            key={category._id}
            categoryId={category._id}
            category={category.category}
            contacts={category.contacts}
          />
        ))}
      </div>
    </div>
  );
};
