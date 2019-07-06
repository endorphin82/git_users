import axios from "axios";
import {
  BASEUSERSAPI,
  FETCH_USERS, START, SUCCESS, FAILURE,
  LOAD_INFO_USER_BY_LOGIN
} from "./actions-types"

export const getUsers = () => dispatch => {
  dispatch({
    type: FETCH_USERS + START
  });
  return axios.get(`https://api.github.com/search/users?q=location:Kharkiv&type=Users`)
    .then(response => response.data)
    .then(users => dispatch({
      type: FETCH_USERS + SUCCESS,
      payload: {users}
    }))
    .catch(errors => dispatch({
      type: FETCH_USERS + FAILURE,
      payload: {errors}
    }))
};

export const loadInfoUserByLogin = (login, idx) => dispatch => {
  dispatch({
    idx,
    type: LOAD_INFO_USER_BY_LOGIN,
    payload: login,
    callAPI: `${BASEUSERSAPI}${login}`
  })
};
