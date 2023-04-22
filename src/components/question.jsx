import he from "he";
import { nanoid } from "nanoid";

export default function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.question;

  const incorrectAnswers = incorrect_answers.map((answer) => {
    return (
      <button key={nanoid()} className="answer">
        {correctStrings(answer)}
      </button>
    );
  });

  const correctAnswer = (
    <button key={nanoid()} className="answer selected">
      {correctStrings(correct_answer)}
    </button>
  );

  const answerOptions = [...incorrectAnswers, correctAnswer];

  function correctStrings(string) {
    return he.decode(string);
  }

  // Shuffle array using the Fisher-Yates Algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array;
    }
  }

  return (
    <div className="question-container">
      <h2 className="question">{correctStrings(question)}</h2>
      <div className="answer-container">{shuffleArray(answerOptions)}</div>
      <div className="line" />
    </div>
  );
}
