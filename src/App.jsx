import { useEffect, useState } from "react";
import Question from "./components/question";
import SmallBlueBlob from "./assets/blobbluesmall.svg";
import BlueBlob from "./assets/blobblue.svg";
import YellowBlob from "./assets/blobyellow.svg";
import SmallYellowBlob from "./assets/blobyellowsmall.svg";
import { nanoid } from "nanoid";
import he from "he";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [checked, setChecked] = useState(false);
  const [questions, setQuestions] = useState([]);

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

  function correctStrings(string) {
    return he.decode(string);
  }

  // Set the questions state to the following data
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) =>
        setQuestions(
          data.results.map((question) => {
            return {
              id: nanoid(),
              question: correctStrings(question.question),
              correct: question.correct_answer,
              selected: null,
              checked: false,
              answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
              ]),
            };
          })
        )
      );
  }, [count]);

  function handleCheck() {
    let selected = true;
    questions.map((question) => {
      if (question.selected === null) {
        selected = false;
        return;
      }
    });

    if (!selected) {
      return;
    }
    setQuestions((questions) =>
      questions.map((question) => {
        return { ...question, checked: true };
      })
    );
    setChecked(true);
    let correct = 0;
    questions.map((question) => {
      if (question.correct === question.selected) {
        correct += 1;
      }
    });
    setCorrect(correct);
  }

  function handleClickAnswer(id, answer) {
    setQuestions((questions) =>
      questions.map((question) => {
        return question.id === id
          ? { ...question, selected: answer }
          : question;
      })
    );
  }

  // Load new quiz after game is finished
  function handlePlayAgain() {
    setCount((count) => count + 1);
    setChecked(false);
  }

  // Create list of questions
  const questionElements = questions.map((question) => {
    return (
      <Question
        key={question.id}
        id={question.id}
        question={question}
        handleClickAnswer={handleClickAnswer}
        correctStrings={correctStrings}
      />
    );
  });

  // Conditionally render the startscreen or list of questions
  return (
    <main>
      {gameStarted ? (
        <div className="flex-container">
          <img className="blueblob" src={SmallBlueBlob} />
          <img className="yellowblob" src={SmallYellowBlob} />
          {questionElements}
          <div className="score-container">
            {checked && (
              <span
                style={{ display: checked ? "inlineBlock" : "none" }}
                className="score"
              >
                You scored {correct}/5 correct answers
              </span>
            )}
            <button
              onClick={checked ? handlePlayAgain : handleCheck}
              className="btn btn-check"
            >
              {checked ? "Play Again" : "Check Answers"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-container">
          <h1 className="quiz-title">Quizzical</h1>
          <span className="start-description">Some description if needed</span>
          <button
            className="btn btn-start"
            onClick={() => setGameStarted(true)}
          >
            Start Quiz
          </button>
          <img className="blueblob" src={BlueBlob} />
          <img className="yellowblob" src={YellowBlob} />
        </div>
      )}
    </main>
  );
}
