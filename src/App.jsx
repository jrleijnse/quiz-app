import { useEffect, useState } from "react";
import Question from "./components/question";
import SmallBlueBlob from "./assets/blobbluesmall.svg";
import BlueBlob from "./assets/blobblue.svg";
import YellowBlob from "./assets/blobyellow.svg";
import SmallYellowBlob from "./assets/blobyellowsmall.svg";
import { nanoid } from "nanoid";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const questionElements = questions.map((question) => {
    return <Question question={question} key={nanoid()} />;
  });

  return (
    <main>
      {gameStarted ? (
        <div className="flex-container">
          <img className="blueblob" src={SmallBlueBlob} />
          <img className="yellowblob" src={SmallYellowBlob} />
          {questionElements}
        </div>
      ) : (
        <div className="flex-container">
          <h1 className="quiz-title">Quizzical</h1>
          <span className="start-description">Some description if needed</span>
          <button className="btn-start" onClick={() => setGameStarted(true)}>
            Start Quiz
          </button>
          <img className="blueblob" src={BlueBlob} />
          <img className="yellowblob" src={YellowBlob} />
        </div>
      )}
    </main>
  );
}
