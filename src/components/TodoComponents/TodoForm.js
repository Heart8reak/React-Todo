import React from "react";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
    }

    handleChanges = e => {
        this.setState({ ...this.state, newItem: e.target.value })
    };

    handleSubmit = e => {
        // console.log(this.props)
        e.preventDefault();
        this.props.addNewItem(this.state.newItem)
        // this.setState({
        //     newItem: ""
        // })
    }

    render() {
        console.log("rendering form")
        // console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                    value={this.state.newItem}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;