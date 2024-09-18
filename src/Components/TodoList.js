import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    if (content === "") {
      toast.error("Please enter todo");
      return;
    }

    if (data.includes(content)) {
      toast.error("This todo already exists");
      return;
    }

    setData((prevData) => {
      const newData = [...prevData, content];
      return newData;
    });
    toast.success("Successfully added todo");
    setContent("");
  };

  const handleRemove = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
    toast.success("Successfully removed");
  };

  const onRemovalAll = () => {
    if(data.length === 0) {
      toast.error("No todo's exists, please enter");
      return;
    }
    setData([]);
    toast.success("Successfully removed all todo's");
  };

  return (
    <div className="w-[485px] m-4 mt-20 p-4 bg-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          className="w-full p-2 border rounded-lg mr-2 ml-4"
          placeholder="Add a new task..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        {data.map((value, index) => (
          <TodoItem
            text={value}
            key={value} // Ideally, you would use a unique ID if you have one
            onRemove={() => handleRemove(index)}
          />
        ))}
        <ToastContainer />
      </div>
      <div className="flex m-2">
        <button
          className="border-solid border-2 border-black text-black bg-amber-200 rounded-lg w-[260px] h-10 text-2xl mx-2"
          onClick={handleClick}
        >
          Add
        </button>
        <button
          className="border-solid border-2 border-black text-black bg-amber-200 rounded-lg w-[280px] h-10  text-2xl"
          onClick={onRemovalAll}
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
