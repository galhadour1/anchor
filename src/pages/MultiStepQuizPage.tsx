import "./MultiStepQuizPage.css";
import { templateQuestions } from "../utils/templateQuestions";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import { updateQuestions } from "../redux/actions/questionsActions";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../redux/store";
import React from "react";

const MultiStepQuizPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = useAppSelector(
    (state: RootState) => state.questions?.questions
  );

  useEffect(() => {
    dispatch(updateQuestions(templateQuestions));
  }, []);

  const onSelectAnswer = (selectedAnswerIndex: number, questionId: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionId].selectedAnswer = selectedAnswerIndex;
    dispatch(updateQuestions(updatedQuestions));
  };

  const onClickNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onClickPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const onClickSubmit = () => {
    navigate("/score", { state: { questions: questions } });
  };

  return (
    <div className="multi-step-quiz-container">
      <h1 className="multi-step-quiz-title">Multi Step Quiz</h1>
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          onSelectAnswer={onSelectAnswer}
        />
      )}
      <div className="footer">
        <button
          className={
            currentQuestionIndex === 0 ? "previous-btn-hidden" : "previous btn"
          }
          onClick={onClickPrevious}
        >
          Previous
        </button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button
            className="submit btn"
            onClick={onClickSubmit}
            disabled={questions[currentQuestionIndex]?.selectedAnswer === null}
          >
            Submit
          </button>
        ) : (
          <button
            className="next btn"
            disabled={questions[currentQuestionIndex]?.selectedAnswer === null}
            onClick={onClickNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepQuizPage;
