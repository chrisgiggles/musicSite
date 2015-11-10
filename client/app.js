import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory.js';
//Component imports
import App from './components/App/App.js'

const history = createBrowserHistory();

ReactDOM.render((
    <Router history={ history }>
        <Route path='/' component={App}></Route>
    </Router>
), document.getElementById('app'));