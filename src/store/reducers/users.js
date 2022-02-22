import { LOAD_USERS } from "../actions/users";
import { ADD_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  if (action.type == LOAD_USERS) {
    return action.users;
  }
  if (action.type == ADD_ANSWER) {
    const { questionId, authedUser, answer } = action.answer;
    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [questionId]: answer,
        },
      },
    };
  }

  if (action.type == ADD_QUESTION) {
    const { id } = action.qusetion;
    const authedUser = action.qusetion.creator;
    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        questions: state[authedUser].questions.concat([id]),
      },
    };
  }

  return state;
}
