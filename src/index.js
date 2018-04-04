import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/reducer';
import './index.css';
import {
    AppContainer
} from './App';
import {history} from './helpers/helpers';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer, compose(applyMiddleware(promiseMiddleware(), thunkMiddleware), window.devToolsExtension ?
    window.devToolsExtension() :
    f => f));

//const store = createStore(rootReducer, compose(applyMiddleware(promiseMiddleware(),thunkMiddleware)));

// dispatch inital SET_STATE action
store.dispatch({
    type: 'SET_STATE_RACKETLIST',
    state: {
        rackets: [{
            id: null,
            name: '',
            manufacturer: '',
            release_year: ''
        }]
    }
});

store.dispatch({
    type: 'SET_STATE_TEST',
    state: {
        authentication: {
            user: {},
            loggedIn: false,
            loggingIn: false,
            submitted: false
        }
    }
});

/*
store.dispatch({
    type: 'SET_STATE_AUTH',
    state: {
        isAuthenticated: null,
        isFetching: false,
        profile: {},
        error: null

    }
});
*/

ReactDOM.render(
  <Provider store={store} >
    <Router history={history} >
      <AppContainer />
    </Router>
  </Provider>, document.getElementById('root'));
    registerServiceWorker();
