import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
