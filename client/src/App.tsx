import { useState, createContext, useEffect } from "react";
import { getCategories } from "./api/getCategories";
import reactLogo from "./assets/react.svg";
import { AddCategory } from "./components/AddCategory";
import { BASE_URL } from "./config";

type CategoryContextType = {
  categories: TCategory[] | null;
  setCategories: React.Dispatch<React.SetStateAction<TCategory[]>>;
};

const iCategoryContextState = {
  categories: null,
  setCategories: () => {},
};

export const Context = createContext<CategoryContextType>(
  iCategoryContextState
);

function App() {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategories(categories);
    })();
  }, []);

  return (
    <div>
      <Context.Provider value={{ categories, setCategories }}>
        <AddCategory />
      </Context.Provider>
    </div>
  );
}

export default App;
