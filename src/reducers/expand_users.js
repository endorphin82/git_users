import {FAILURE, LOAD_INFO_USER_BY_LOGIN, START, SUCCESS} from "../actions/actions-types";

const initialState = {
  errors: {},
  loading: false
};

export default function expand_users(state = initialState, action) {
  switch (action.type) {
    case LOAD_INFO_USER_BY_LOGIN + START:
      return {
        ...state,
        loading: false
      }
    case LOAD_INFO_USER_BY_LOGIN + SUCCESS:
      return {
        ...state,
        // expand_users: [...action.response],
        [action.idx]: action.response,
        loading: true
      }
    case LOAD_INFO_USER_BY_LOGIN + FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
        loading: false
      };
    default:
      return state;
  }
}