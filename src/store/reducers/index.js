import { combineReducers } from "redux";

import users from "./users";
import qusetions from "./questions";
import authedUser from "./authedUser";
export default combineReducers({
  authedUser,
  qusetions,
  users,
});
