import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { session } from './session';

const reducers = combineReducers({
  session
});

export const makeStore = initState => {
  return createStore(reducers, initState, applyMiddleware(thunk));
};


