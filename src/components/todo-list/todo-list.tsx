import { observer } from "mobx-react";

import AddTodo from "../add-todo/add-todo";
import store from "../../store/store";

import { Checkbox, Headline, Input } from "./todo-list.styles";

const TodoList = () => {
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
                checked={todo.done}
                onClick={() => (todo.done = !todo.done)}
              />
              <Input
                className="input"
                type="text"
                value={todo.text}
                onChange={(e) => (todo.text = e.target.value)}
              />
              <button
                className="button"
                onClick={() => store.removeTodo(todo.id)}
              >
                Delete
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
