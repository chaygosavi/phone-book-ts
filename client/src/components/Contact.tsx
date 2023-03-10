import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addContact } from "../api/addContact";
import { getCategory } from "../api/getCategory";
import { updatedTitle } from "../api/updateTitle";
import { FaUserAlt } from "react-icons/fa";
import { deleteContact } from "../api/deleteContact";

export const Contact = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<TCategory>();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      const category = await getCategory(categoryId!);
      setCategory(category);
    })();
  }, [categoryId]);

  const handleUpdateTitle = async () => {
    const newTitle = await updatedTitle(title, categoryId!);
    setCategory(newTitle);
    setTitle("");
  };

  const handleAddContact = async (e: FormEvent) => {
    e.preventDefault();
    const newCategory = await addContact(
      categoryId!,
      name,
      description,
      number
    );
    console.log("newCategory", newCategory);
    setCategory(newCategory);
    setName("");
    setDescription("");
    setNumber("");
  };

  const handleDeleteContact = async (contactId: string) => {
    const afterDeletingContactList = await deleteContact(
      categoryId!,
      contactId
    );
    setCategory(afterDeletingContactList);
  };

  console.log(category?.contacts);

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
      {/* Contacts */}
      <div className="mt-10 flex flex-col space-y-2">
        <form onSubmit={handleAddContact} className="flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter contact name"
              className="inputs border"
            />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Enter Phone number"
              className="inputs border"
            />
          </div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter description"
            className="inputs border"
          />
          <button disabled={!name || !number} className="my-5 btn">
            Add
          </button>
        </form>
        <div className="pt-4">
          <div className="flex justify-between text-yellow-500 p-5 border-b first:border-t">
            <p className="w-32 ml-6">Contact Name</p>
            <p className="flex-1 ml-6">Description</p>
            <p className="flex-1 mr-12">Phone Number</p>
            <p></p>
          </div>
          {category?.contacts.map((contactd) => (
            <div
              key={contactd._id}
              className="flex justify-between text-yellow-500 p-5 border-b first:border-t space-x-3"
            >
              <FaUserAlt size={27} className="self-center" />
              <h1 className="capitalize w-32 mx-3">{contactd.name}</h1>
              <p className="flex-1">{contactd.description}</p>
              <p className="flex-1">{contactd.number}</p>
              <button
                onClick={() => handleDeleteContact(contactd._id)}
                className="px-2 bg-red-500 rounded-lg text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
