import {LOAD_INFO_USER_BY_LOGIN, START, SUCCESS} from "../actions/actions-types";

const initialState = {
  expand_users: {},
  errors: {},
  loading: false
};

export default function expand_users(state = initialState, action) {
  switch (action.type) {
    case LOAD_INFO_USER_BY_LOGIN + START:
      return {
        ...state
      }
    case LOAD_INFO_USER_BY_LOGIN + SUCCESS:
      return {
        ...state,
        expand_users: {login: action.response}
      }
    default:
      return state;
  }
}