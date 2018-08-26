import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Router, Route, Switch, browserHistory, Redirect } from 'react-router-dom';
import HomePage from "HomePage";
import Account from "Account";
import Transaction from "Transaction";
import Nav from "Nav";
import Main from "Main";
import { Provider } from 'react-redux';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!./css/style.scss');
$(document).ready(() => $(document).foundation());

var redux = require('redux');

var username = (state = null, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.username;
        case 'LOG_OUT':
            return null;
        default:
            return state;
    }
}

var notification = (state = null, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.txt;
        case 'HIDE_NOTIFICATION':
            return null;
        default:
            return state;
    }
}

var reducer = redux.combineReducers({ username, notification });
var store = redux.createStore(reducer);
// store.dispatch({ type: 'LOG_IN', username: 'MinhNguyen' });
// console.log(store.getState());
// store.dispatch({ type: 'LOG_IN', username: 'minhnguyen' });
// console.log(store.getState());
// store.dispatch({ type: 'LOG_OUT' });
// console.log(store.getState());


var requireLogin = () => {
    if (store.getState().username === null) {
        <Redirect to="/" />;
    }
    <Transaction />;
}

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Main />
                <Switch>
                    {/* <Route exact path="/" component={Main} /> */}
                    <Route path="/account" component={Account} />
                    <Route path="/transaction" render={() => (
                        store.getState().username === null ? <Redirect to="/" /> : <Transaction />
                    )} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);
