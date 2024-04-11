import QuestionType from "../../interfaces/QuestionType";
import {
  UPDATE_QUESTIONS,
  UpdateQuestionsAction,
} from "../actions/questionsActions";

export interface QuestionsState {
  questions: QuestionType[];
}

const initialState: QuestionsState = {
  questions: [],
};

const questionReducer = (
  state = initialState,
  action: UpdateQuestionsAction
): QuestionsState => {
  switch (action.type) {
    case UPDATE_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
