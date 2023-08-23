import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoProvider } from "./Store/todo-context";

import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <TodoProvider>
      <Header />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
