export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function AddAnswer(answer) {
  console.log(answer);
  return {
    type: ADD_ANSWER,
    answer,
  };
}
export function loadQuestions(qusetions) {
  return {
    type: LOAD_QUESTIONS,
    qusetions,
  };
}

export function addQuestionAction(qusetion) {
  return {
    type: ADD_QUESTION,
    qusetion,
  };
}
