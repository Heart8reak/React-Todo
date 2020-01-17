import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import data from './data'
import "./style.css"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super();
    this.state = {
      taskData: data,
      // newList: ""
    }
    // console.log("data", data)
  }

  addNewItem = newItemTask => {
    console.log(newItemTask)
    const newState = {
      ...this.state,
      taskData: [
        ...this.state.taskData,
        { task: newItemTask, id: Date.now(), completed: false }
      ]
    };
    // console.log(newState)
    this.setState(newState)
    // console.log(this.state)
  }

  toggleCompleted = id => {
    // e.preventDefault();
    // console.log("index.js: App: toggleCompleted: id: ", id)
    const newTaskData = this.state.taskData.map(item => {
      console.log('item.id', item.id)
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
    this.setState({
      taskData: newTaskData
    });
    console.log(newTaskData)
  }

  clearCompleted = id => {
    const newState = {
      ...this.state({
        taskData: this.state.taskData.filter(item => {
          return !item.completed === false;
        })
      })
    };
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
