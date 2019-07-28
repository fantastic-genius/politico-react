import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = applyMiddleware(promise, thunk, logger());
const store = createStore(reducer, middleware);

export default store;
