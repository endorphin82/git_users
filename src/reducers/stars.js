import {FETCH_STARS_BY_LOGIN_REQUEST, FETCH_STARS_BY_LOGIN_SUCCESS} from "../actions/actions-types";
const initialState = {
  users: [],
  errors: {},
  loading: false
};

export default function  stars(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARS_BY_LOGIN_REQUEST:
      return{
        ...state,
        loading: false,
        errors: 's'
      }
    case FETCH_STARS_BY_LOGIN_SUCCESS:
      return{
        ...state,
        stars: action.payload.stars,
        loading: false,
        errors: 's'
      }
    default:
      return state;
  }
}
