// src/components/TodoItem.js
import React from "react";

const TodoItem = ({ text , onRemove}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow mb-2 w-[427px] h-10 ml-4">
      <input type="checkbox" className="mr-4" onClick={onRemove}/>
      <span>{text}</span>
    </div>
  );
};

export default TodoItem;
