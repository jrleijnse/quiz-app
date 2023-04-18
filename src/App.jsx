import { useState } from "react";

export default function App() {
  const [gameStarted, setGameStarted] = useState(true);

  return (
    <main>
      {gameStarted ? <h1>Game has not started</h1> : <h1>Game has started</h1>}
    </main>
  );
}
