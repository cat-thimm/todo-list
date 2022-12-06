import { Todo } from "./store.types";

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    checked: false,
  },
];

export const getTodosFromLocalStorage = (): Todo[] => {
  const todos = localStorage.getItem("todos");

  if (!todos) {
    return [];
  }

  return JSON.parse(todos);
};

export const addTodosToLocalStorage = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
