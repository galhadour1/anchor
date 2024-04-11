import "./ScorePage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScorePage: React.FC = () => {
  const [score, setScore] = useState(0);
  const location = useLocation();
  const questions = location.state.questions;

  useEffect(() => {
    let correctAnswersCounter = 0;
    questions.forEach(
      (question: { correctAnswerIndex: any; selectedAnswer: any }) => {
        if (question.correctAnswerIndex === question.selectedAnswer) {
          correctAnswersCounter++;
        }
      }
    );

    setScore((correctAnswersCounter / questions.length) * 100);
  }, [questions]);

  return (
    <div className="score-container">
      <h1>Your Score:</h1>
      <h2 className="score">{score}</h2>
    </div>
  );
};

export default ScorePage;
