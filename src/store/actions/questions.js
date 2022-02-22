export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function loadQuestions(qusetions) {
  return {
    type: LOAD_QUESTIONS,
    qusetions,
  };
}

export function addQuestion(qusetion) {
  return {
    type: ADD_QUESTION,
    qusetion,
  };
}
