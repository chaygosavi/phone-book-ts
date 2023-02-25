import React, { FormEvent, useEffect, useState } from "react";

export const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(null);
  console.log("categories", categories);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:9999", {
        method: "GET",
      });

      const categories = await res.json();
      setCategories(categories);
    })();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9999", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });

    const newCategory = await response.json();
    console.log("newCategory", newCategory);
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
    </div>
  );
};
