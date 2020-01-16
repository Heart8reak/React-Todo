import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import data from './data'
import "./style.css"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskData: data,
      newList: ""
    }
  }

  addNewItem = newItemTask => {
    console.log(newItemTask)
    const newState = {
      ...this.state,
      taskData: [
        ...this.state.taskData,
        { task: newItemTask, completed: false, id: Date.now() }
      ]
    };
    console.log(newState)
    this.setState(newState)
    console.log(this.state)
  }

  toggleCompleted = (e, id) => {
    e.preventDefault();
    console.log("index.js: App: toggleCompleted: id: ", id)
    const newState = {
      ...this.state,
      newList: this.state.taskData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    }
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      newList: this.state.newList.filter(item => {
        return !item.completed;
      })
    }
    this.setState(newState)
  }
  render() {
    console.log("rendering...")
    return (
      <div className="App">
        <div className="header">
          <h2>Things I need ToDo to Rule the World!</h2>
          <TodoForm
            addNewItem={this.addNewItem}
          />
        </div>
        <TodoList
          tasks={this.state.taskData}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
