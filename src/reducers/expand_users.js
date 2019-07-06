import {FAILURE, LOAD_INFO_USER_BY_LOGIN, START, SUCCESS} from "../actions/actions-types";

const initialState = [];

export default function expand_users(state = initialState, action) {
  switch (action.type) {
    case LOAD_INFO_USER_BY_LOGIN + START:
      return [
        ...state,
      ];
    case LOAD_INFO_USER_BY_LOGIN + SUCCESS:
      return [
        ...state,
        action.response
      ];
    case LOAD_INFO_USER_BY_LOGIN + FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
}