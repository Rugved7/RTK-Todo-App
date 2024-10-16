import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../reducers/todos/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Track the todo being edited and its new content
  const [isEditing, setIsEditing] = useState(null);
  const [newContent, setNewContent] = useState("");

  // Handle edit click, populate the input with existing content
  const handleEditClick = (id, content) => {
    setIsEditing(id);
    setNewContent(content);
  };

  // Handle update after editing
  const handleUpdate = (id) => {
    if (newContent.trim()) {
      dispatch(updateTodo({ id, content: newContent }));
      setIsEditing(null); // Exit edit mode
      setNewContent(""); // Clear input
    }
  };

  return (
    <>
      <div className="text-2xl font-bold text-center mb-6">Todos</div>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-black shadow-md p-4 rounded-lg border border-gray-300"
          >
            {/* If the todo is being edited, show the input field */}
            {isEditing === todo.id ? (
              <input
                type="text"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="text-lg p-2 rounded-lg border border-gray-300 w-full"
              />
            ) : (
              <span className="text-lg text-white">{todo.content}</span>
            )}

            <div className="flex space-x-4">
              {/* Pencil icon button to enter edit mode */}
              {isEditing === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo.id, todo.content)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  ✏️
                </button>
              )}

              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-lg"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
