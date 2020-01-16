import React from "react";


const Todo = props => {
    return (
        <div
            onClick={(e) => props.toggleCompleted(e, props.item.id)}
            className={`item${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;