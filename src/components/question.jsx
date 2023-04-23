import { nanoid } from "nanoid";

export default function Question(props) {
  const answerList = props.question.answers;
  console.log(answerList);

  function handleClick(answer) {
    if (props.question.checked) {
      return;
    }
    props.handleClickAnswer(props.id, answer);
  }

  const answerElements = answerList.map((answer) => {
    let id = null;
    if (props.question.checked) {
      if (props.question.correct == answer) {
        id = "correct";
      } else if (props.question.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }
    return (
      <button
        key={nanoid()}
        id={id}
        className={
          answer === props.question.selected ? "answer selected" : "answer"
        }
        onClick={() => handleClick(answer)}
      >
        {props.correctStrings(answer)}
      </button>
    );
  });

  return (
    <div className="question-container">
      <h2 className="question">{props.question.question}</h2>
      <div className="answer-container">{answerElements}</div>
      <div className="line" />
    </div>
  );
}

// const styles = {
//   backgroundColor: props.isSelected ? "Red" : "white",
// };

// const answerList = [props.correctAnswer, ...props.incorrectAnswers];

// const { question, correct_answer, incorrect_answers } = props.question;

// const incorrectAnswers = incorrect_answers.map((answer) => {
//   return (
//     <button key={nanoid()} id={nanoid()} className="answer">
//       {correctStrings(answer)}
//     </button>
//   );
// });

// const correctAnswer = (
//   <button key={nanoid()} id={nanoid()} className="answer answer-correct">
//     {correctStrings(correct_answer)}
//   </button>
// );

// const answerOptions = [...incorrectAnswers, correctAnswer];
