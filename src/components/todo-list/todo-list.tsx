import { observer } from "mobx-react";
import { useState } from "react";

import { addTodosToLocalStorage } from "../../store/store.helper";
import store from "../../store/store";

import AddTodo from "../add-todo/add-todo";

import { Checkbox, Headline, Input } from "./todo-list.styles";

/**
 * This component is being used to display all todos as a list.
 * It allows you to edit an entry in the list from the mobX store or delete a todo.
 */

const TodoList = () => {
  const [editField, setEditField] = useState(false);

  return (
    <div className="column todo-list">
      <div className="todo-list__header">Todo List</div>
      <Headline>
        You have {store.unfinishedTodos} unfinished todos left.
      </Headline>
      <div>
        {store.todos.map((todo) => {
          return (
            <div key={todo.id} className="row">
              <Checkbox
                type="checkbox"
                checked={todo.checked && !editField}
                onChange={() => (todo.checked = !todo.checked)}
              />
              <Input
                className="input"
                type="text"
                value={todo.text}
                onFocus={() => {
                  setEditField(true);
                }}
                onBlur={() => {
                  setEditField(false);
                  addTodosToLocalStorage(store.todos);
                }}
                onChange={(e) => (todo.text = e.target.value)}
              />
              <button
                className="button"
                onClick={() => {
                  if (todo.checked) {
                    store.removeTodo(todo.id);
                  }
                }}
                disabled={!todo.checked}
              >
                Done
              </button>
            </div>
          );
        })}
      </div>
      <AddTodo />
    </div>
  );
};

export default observer(TodoList);
