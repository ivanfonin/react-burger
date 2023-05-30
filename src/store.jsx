import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { socketMiddleware } from './services/middleware/socketMiddleware';
import rootReducer from './services/reducers';

import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
  wsConnectionSuccess,
  wsConnectionClosed,
  wsConnectionError,
  wsGetMessage,
} from './services/actions/ws';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  onOpen: wsConnectionSuccess,
  onClose: wsConnectionClosed,
  onError: wsConnectionError,
  onMessage: wsGetMessage,
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, socketMiddleware(wsActions))
);

export const store = createStore(rootReducer, enhancer);
