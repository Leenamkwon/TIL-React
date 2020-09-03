import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import userReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: userReducer,
});
