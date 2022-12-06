import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/quicksand";

import "./index.css";
import TodoList from "./components/todo-list/todo-list";

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);
