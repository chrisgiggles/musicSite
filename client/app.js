import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory.js';
//Store
import todoStore from './reducers/todos.js';
//Actions
import {addTodo} from './actions/todos.js';
//Component imports
import App from './components/App/App.js';
import Home from './components/Home/Home.js';
import AddTodo from './components/AddTodo/AddTodo.js';

let store = createStore(todoStore);
const history = createBrowserHistory();

function onUpdate() {
    console.log('Router state -->', this.state);
    console.log('state tree -->', store.getState());
}

store.dispatch(addTodo('text'));
store.dispatch(addTodo('text 2'));
store.dispatch(addTodo('text 3'));

ReactDOM.render((
    <Provider store={store}>
        <Router /*history={history}*/ onUpdate={ onUpdate }>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='add' component={AddTodo} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));