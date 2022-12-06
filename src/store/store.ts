import { computed, makeObservable, observable } from "mobx";

import {
  addTodo,
  addTodosToSessionStorage,
  getTodosFromSessionStorage,
  removeTodo,
} from "./store.helper";
import { Todo } from "./store.types";

/**
 * This class is used as a mobx store in order to enable state management in this app.
 */
class Todos {
  todos: Todo[] = getTodosFromSessionStorage();
  finsihedTodos: Todo[] = [];
  newTodo: string = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      finsihedTodos: observable,
      newTodo: observable,
      unfinishedTodos: computed,
    });
  }

  get unfinishedTodos(): number {
    return this.todos.length;
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);

    const todosInStorage = removeTodo(getTodosFromSessionStorage(), id);
    addTodosToSessionStorage(todosInStorage);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = "";

    addTodosToSessionStorage(this.todos);
  }
}

const store = new Todos();

export default store;
