import {combineReducers} from "redux";
import users from "./fetching"
import expand_users from './expand_users'

const reducer = combineReducers({
  users,
  expand_users
});

export default reducer;