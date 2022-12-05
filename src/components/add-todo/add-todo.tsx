import { observer } from "mobx-react";
import { useState } from "react";

import store from "../../store/store";

import { Input, ErrorText, SubmitButton } from "./add-todo.styles";

const AddTodo = () => {
  const [error, setError] = useState("");

  return (
    <div className="row">
      <div className="column">
        <Input
          className="input"
          type="text"
          placeholder="New Todo"
          value={store.newTodo}
          onChange={(e) => (store.newTodo = e.target.value)}
          error={error !== ""}
        />
        <ErrorText>{error}</ErrorText>
      </div>
      <SubmitButton
        className="button"
        onClick={() => {
          if (store.newTodo !== "") {
            store.addTodo();
            setError("");
          } else {
            setError("Bitte gib ein Todo ein.");
          }
        }}
      >
        Add Todo
      </SubmitButton>
    </div>
  );
};

export default observer(AddTodo);
