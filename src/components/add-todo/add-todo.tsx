import { observer } from "mobx-react";
import { useState } from "react";

import store from "../../store/store";

import { Input, ErrorText, SubmitButton } from "./add-todo.styles";

/**
 * This component allows you to add a new todo to the todo list in the mobx store.
 * */

const AddTodo = () => {
  const [error, setError] = useState("");

  function addTodo(): void {
    if (store.newTodo !== "") {
      store.addTodo();
      setError("");
    } else {
      setError("Please enter a new todo.");
    }
  }

  return (
    <div className="row">
      <div className="column">
        <Input
          className="input"
          type="text"
          placeholder="New Todo"
          value={store.newTodo}
          onChange={(e) => (store.newTodo = e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          error={error !== ""}
        />
        <ErrorText>{error}</ErrorText>
      </div>
      <SubmitButton className="button" onClick={addTodo}>
        Add Todo
      </SubmitButton>
    </div>
  );
};

export default observer(AddTodo);
