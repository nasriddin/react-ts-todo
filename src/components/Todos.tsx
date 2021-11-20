import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoElement from './TodoElement'
import classes from './Todos.module.css';

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext)

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => 
                <TodoElement 
                key={item.id}
                id={item.id}
                removeTodo={todosCtx.removeTodo.bind(null, item.id)}
                text={item.text} />
            )}
        </ul>
  
    );
}

export default Todos;
