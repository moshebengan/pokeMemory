import { useEffect, useState } from "react";

import "./styles/app.css";

import ScoreBoard from "./components/ScoreBoard";
import MainBoard from "./components/MainBoard";
import GameOver from "./components/GameOver";
import EndGame from "./components/EndGame";

function App() {


  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const scoreIncrease = () => {
    setScore(score + 1);
  };

  const highScoreIncrease = () => {
    if (highScore === 0) {
      setHighScore(score);
    }
    if (highScore > 0) {
      if (score > highScore) {
        setHighScore(score);
      }
    }
  };

  const gameIsOver = () => {
    setGameOver(true);
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
  };

  const handleWin = () => {
    setScore(0);
    setHighScore(0);
    setGameOver(false)
  };

  useEffect(() => {
    highScoreIncrease();
  }, [score]);

  return (
    <div className="app">
      <ScoreBoard score={score} highScore={highScore} />
      
      {!gameOver && highScore < 58 && (
        <MainBoard
        scoreIncrease={scoreIncrease}
        setGameOver={gameIsOver}
      />
      )}
      {gameOver && <GameOver restartGame={restartGame} highScore={highScore} />}

      {highScore == 46 && <EndGame handleWin={handleWin} />}
      
      
  
    </div>
  );
}

export default App;
