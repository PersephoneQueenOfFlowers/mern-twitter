// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
  session,
  TweetsReducer
});

export default RootReducer;