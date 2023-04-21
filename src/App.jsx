import { useState } from "react";
import BlueBlob from "./assets/blobblue.svg";
import YellowBlob from "./assets/blobyellow.svg";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <main>
      {gameStarted ? (
        <div className="flex-container">Questions</div>
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
