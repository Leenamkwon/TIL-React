import { combineReducers } from 'redux';
import authReducer from './autoReducer';

export default combineReducers({
  auth: authReducer,
});
