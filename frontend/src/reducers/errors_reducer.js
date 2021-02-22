// src/reducers/errors_reducer.js

import { combineReducers } from 'react-redux';

import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer
});