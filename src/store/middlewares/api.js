import { START, SUCCESS, FAILURE } from "../../actions/actions-types";

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);

  next({
    ...rest, type: type + START

  });

  setTimeout(() => {
    fetch(callAPI)
      .then(res => res.json())
      .then(response => next({ ...rest, type: type + SUCCESS, response }))
      .catch(error => next({ ...rest, type: type + FAILURE, payload: error }));
  }, 1000);

}