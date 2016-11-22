import redux from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './allReducers';
var thunk = require('redux-thunk').default;
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(allReducers,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
