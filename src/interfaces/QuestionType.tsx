export default interface QuestionType {
  id: number;
  text: string;
  possibleAnswers: string[];
  correctAnswerIndex: number;
  selectedAnswer: number | null | undefined;
}
