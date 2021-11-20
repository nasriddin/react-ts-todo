import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContectObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContectObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (toDoText: string) => {
    const newTodo = new Todo(toDoText);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodDoHandler = (toDoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== toDoId);
    });
  };

  const contextValue: TodosContectObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodDoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
