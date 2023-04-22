import he from "he";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Question(props) {
  return (
    <div className="question-container">
      <h2 className="question">Question 1</h2>
      <div className="answer-container">
        <button className="answer">Answer</button>
        <button className="answer">Answer</button>
        <button className="answer">Answer</button>
        <button className="answer">Answer</button>
        <button className="answer">Answer</button>
      </div>
      <div className="line" />
    </div>
  );
}

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

// function correctStrings(string) {
//   return he.decode(string);
// }

// // Shuffle array using the Fisher-Yates Algorithm
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     return array;
//   }
// }
