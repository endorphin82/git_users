import axios from "axios";
import {
  BASEUSERSAPI,
  FETCH_USERS, START, SUCCESS, FAILURE,
  FETCH_STARS_BY_LOGIN, LOAD_INFO_USER_BY_LOGIN
} from "./actions-types"

export const getUsers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_USERS + START
    });
    return axios.get("https://api.github.com/search/users?q=location:Kharkiv&type=Users")
      .then(response => response.data)
      .then(users => dispatch({
        type: FETCH_USERS + SUCCESS,
        payload: {users}
      }))
      .catch(errors => dispatch({
        type: FETCH_USERS + FAILURE,
        payload: {errors}
      }))
  }
}

export const loadInfoUserByLogin = login => dispatch => {
    dispatch({
      type: LOAD_INFO_USER_BY_LOGIN,
      payload: login,
      callAPI: `https://api.github.com/users/{login}`
    });
}

// export const getStarsByLogin = (login) => {
//   return (dispatch, getState) => {
//     const {users} = getState();
//     dispatch({
//       type: FETCH_STARS_BY_LOGIN_REQUEST
//     })
//     return axios.get(`https://api.github.com/users/${login}/repos`)
//       .then(response => response.data)
//       .then(repos => repos.reduce(function (previous, key) {
//         return previous['stargazers_count'] + key['stargazers_count'];
//       }, 0))
//       .then(stars => dispatch({
//         type: FETCH_STARS_BY_LOGIN_SUCCESS,
//         payload: {stars}
//       }))
//       .catch(errors => dispatch({
//         type: FETCH_STARS_BY_LOGIN_FAILURE,
//         payload: {errors}
//       }))
//   }
// }
//