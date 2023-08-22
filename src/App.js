import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
