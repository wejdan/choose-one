import { LOAD_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

export default function qusetions(state = {}, action) {
  if (action.type == LOAD_QUESTIONS) {
    return action.qusetions;
  }
  if (action.type == ADD_ANSWER) {
    const { questionId, authedUser, answer } = action.answer;
    return {
      ...state,
      [questionId]: {
        ...state[questionId],
        [answer]: {
          ...state[questionId][answer],
          votes: state[questionId][answer].votes.concat([authedUser]),
        },
      },
    };
  }
  if (action.type == ADD_QUESTION) {
    const { id } = action.qusetion;
    return {
      ...state,
      [id]: action.qusetion,
    };
  }
  return state;
}
