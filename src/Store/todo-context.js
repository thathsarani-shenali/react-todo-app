import React, { createContext, useState, useEffect } from "react";

import { fetchTasks, addTask, updateTask, deleteTask } from "../Api/api";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddTodo = async () => {
    if (title.trim() !== "") {
      try {
        const newTask = await addTask(title);
        setItems([newTask, ...items]);
        setTitle("");
      } catch (error) {
        console.error("Error adding new task:", error);
      }
    }
  };

  const handleCheckbox = async (todo) => {
    try {
      const updatedTodo = { ...todo, completed: !todo.completed };
      await updateTask(todo._uuid, updatedTodo);
      const updatedTasks = items.map((item) =>
        item._uuid === todo._uuid
          ? { ...item, completed: !item.completed }
          : item
      );
      setItems(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  const handleDelete = async (todo) => {
    try {
      await deleteTask(todo._uuid);
      const updatedTasks = items.filter((item) => item._uuid !== todo._uuid);
      setItems(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleFetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const tasks = await fetchTasks();
      setItems(tasks);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleFetchTasks();
  }, [setItems]);

  return (
    <TodoContext.Provider
      value={{
        title,
        setTitle,
        items,
        loading,
        error,
        handleAddTodo,
        handleCheckbox,
        handleDelete,
        fetchTasks: handleFetchTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
