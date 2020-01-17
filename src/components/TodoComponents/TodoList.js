// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

// import data from '../../data'

const TodoList = props => {
    // console.log("props", props)
    return (
        <div className="shopping-list">
            {props.tasks.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button
                className="clear-btn"
                onClick={(e) => props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;