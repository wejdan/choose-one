import { SET_AUTHED_USER, LOGOUT } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  if (action.type == SET_AUTHED_USER) {
    return action.id;
  }
  if (action.type == LOGOUT) {
    return null;
  }
  return state;
}
