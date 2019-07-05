import {
  FETCH_USERS, START, SUCCESS, FAILURE
} from "../actions/actions-types";

const initialState = {
  users: {},
  errors: {},
  loading: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS + START:
      return {
        ...state,
        loading: false,
        errors: false
      };
    case FETCH_USERS + SUCCESS:
      return {
        ...state,
        users: action.payload.users.items.slice(0, 10),
        errors: {},
        loading: true
      };
    case FETCH_USERS + FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state;
  }
}


