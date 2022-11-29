import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import characterReducer from './Countries/countriesSlice';

const zoored = combineReducers({ characters: characterReducer });
const middleWares = [thunk, logger];

const store = createStore(
  zoored,
  applyMiddleware(...middleWares),
);
export default store;
