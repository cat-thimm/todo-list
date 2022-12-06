import { computed, makeObservable, observable } from "mobx";

import {
  addTodo,
  addTodosToLocalStorage,
  getTodosFromLocalStorage,
  removeTodo,
} from "./store.helper";
import { Todo } from "./store.types";

/**
 * This class is used as a mobx store in order to enable state management in this app.
 */
class Todos {
  todos: Todo[] = getTodosFromLocalStorage();
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

    const todosInStorage = removeTodo(getTodosFromLocalStorage(), id);
    addTodosToLocalStorage(todosInStorage);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = "";

    addTodosToLocalStorage(this.todos);
  }
}

const store = new Todos();

export default store;
