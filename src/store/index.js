import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const env = process.env.NODE_ENV;

const composeEnhancer =
  env === 'production'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = env === 'production' ? [thunk] : [thunk, createLogger()];

export default createStore(
  reducer,
  composeEnhancer(applyMiddleware(...middleware))
);
