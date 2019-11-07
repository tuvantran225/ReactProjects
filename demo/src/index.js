import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { employeesReducer } from './reducer';
import initialState from './initialState';

const middlewares = [thunk];

const store = createStore(employeesReducer, initialState, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
