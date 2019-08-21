import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';

const middleware = applyMiddleware(promise, thunk, logger());
const store = createStore(reducer, composeWithDevTools(middleware));

export default store;
