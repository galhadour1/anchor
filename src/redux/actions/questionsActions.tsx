import QuestionType from "../../interfaces/QuestionType";

export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export interface UpdateQuestionsAction {
  type: string;
  payload: QuestionType[];
}

export const updateQuestions = (
  questions: QuestionType[]
): UpdateQuestionsAction => ({
  type: UPDATE_QUESTIONS,
  payload: questions,
});
