import { LOAD_USERS } from "../actions/users";

export default function users(state = {}, action) {
  if (action.type == LOAD_USERS) {
    return action.users;
  }

  return state;
}
