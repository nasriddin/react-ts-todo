import React from "react";

import classes from './TodoItem.module.css';

const TodoElement: React.FC<{text: string, removeTodo:()=>void, id: string}> = (props) => {

   

    return(
        <li className={classes.item} onClick={props.removeTodo}>{props.text}</li>
    )
}
export default TodoElement;