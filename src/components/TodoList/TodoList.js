import React, { useContext } from "react";
import classes from "./todoList.module.css";
import AddNewItem from "../NewItemForm/AddNewItem";
import Tasks from "./Tasks";
import { TodoContext } from "../../Store/todo-context"; // Import the TodoContext

const TodoList = () => {
  const { items, loading, error, fetchTasks, handleAddTodo } =
    useContext(TodoContext);

  return (
    <section className={`${classes.todolistSection} mx-auto`}>
      <AddNewItem onAddNewItem={handleAddTodo} />
      <h3 className="py-2">Todo List</h3>
      <hr />
      <Tasks
        items={items}
        loading={loading}
        error={error}
        onFetch={fetchTasks}
      />
    </section>
  );
};

export default TodoList;
