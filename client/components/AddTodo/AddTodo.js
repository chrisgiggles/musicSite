import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class AddTodo extends React.Component { //React.Component

    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('AddTodo.js constructor this.props -->', this.props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const input = ReactDOM.findDOMNode(this.refs.input);
        //store.dispatch(addTodo(input.value));
    }
    
    render() {
        return(
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Todo: </label>
                    <input name="todo" type="text" ref="input"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

function select(state) {
    //??
}

//export default connect(select)(AddTodo);
export default AddTodo;