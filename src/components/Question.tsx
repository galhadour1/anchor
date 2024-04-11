import "./Question.css";
import QuestionType from "../interfaces/QuestionType";

interface QuestionProps {
  question: QuestionType;
  onSelectAnswer: Function;
}

const Question: React.FC<QuestionProps> = ({ question, onSelectAnswer }) => {
  return (
    <div className="question-container">
      <label className="question-text">{question.text}</label>
      <form className="answers-wrapper">
        {question.possibleAnswers.map((possibleAnswer, index) => {
          return (
            <div key={possibleAnswer} className="answer-wrapper">
              <label>
                <input
                  type="radio"
                  id={possibleAnswer}
                  value={possibleAnswer}
                  name={question.text}
                  checked={question.selectedAnswer === index}
                  className={possibleAnswer}
                  onChange={() => onSelectAnswer(index, question.id)}
                />
                {possibleAnswer}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Question;
