import { LOAD_QUESTIONS } from "../actions/questions";

export default function qusetions(state = {}, action) {
  if (action.type == LOAD_QUESTIONS) {
    return action.qusetions;
  }

  return state;
}
