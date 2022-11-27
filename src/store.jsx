import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './services/reducers';

const sayHiMiddleWare = store => next => action => {
  console.log(store.getState());
  return next(action);
};

const enhancer = applyMiddleware(thunkMiddleware, sayHiMiddleWare);

export const store = createStore(rootReducer, enhancer);