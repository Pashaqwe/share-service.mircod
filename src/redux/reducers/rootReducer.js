import { combineReducers } from 'redux';
import { fetchUserInfo } from '../reducers/fetchUserInfo';

export const rootReducer = combineReducers({
  users: fetchUserInfo,
});
