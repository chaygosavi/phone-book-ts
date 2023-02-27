import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../api/getCategory";
import { updatedTitle } from "../api/updateTitle";

export const Contact = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<TCategory>();
  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      const category = await getCategory(categoryId!);
      setCategory(category);
    })();
  }, []);

  const handleUpdateTitle = async () => {
    const newTitle = await updatedTitle(title, categoryId!);
    setCategory(newTitle);
    setTitle("");
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center">
      <div className="border p-2 text-white mt-10  flex flex-col space-y-2">
        <h1 className="font-bold text-2xl capitalize text-center">
          {category?.category}
        </h1>
        <div className="flex items-center">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Change Title"
            className="inputs flex-1"
          />
          <button onClick={() => handleUpdateTitle()} className="btn">
            Change Title
          </button>
        </div>
      </div>
    </div>
  );
};
