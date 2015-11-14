import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory.js';
//Component imports
import App from './components/App/App.js'
import Home from './components/Home/Home.js';
import TrackListing from './components/TrackListing/TrackListing.js';

const history = createBrowserHistory();

function onUpdate() {
    console.log('Router state -->', this.state);
}

ReactDOM.render((
    <Router /*history={history}*/ onUpdate={ onUpdate }>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='tracks' component={TrackListing} />
        </Route>
    </Router>
), document.getElementById('app'));