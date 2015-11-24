import React from 'react';
import { Link } from 'react-router';

class TrackListing extends React.Component { //React.Component

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log('AddTodo.js handleSubmit e -->', e);
    }
    
    render() {
        return(
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Todo: </label><input name="todo" type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default TrackListing;