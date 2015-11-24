import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createStore } from 'redux'
import createBrowserHistory from 'history/lib/createBrowserHistory.js';
//The "store"
import todoStore from './reducers/todos.js';
//Component imports
import App from './components/App/App.js';
import Home from './components/Home/Home.js';
import AddTodo from './components/AddTodo/AddTodo.js';

let store = createStore(todoStore);
const history = createBrowserHistory();

function onUpdate() {
    console.log('Router state -->', this.state);
}

ReactDOM.render((
    <Router /*history={history}*/ onUpdate={ onUpdate }>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='add' component={AddTodo} />
        </Route>
    </Router>
), document.getElementById('app'));