import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [player, setPlayer] = useState(true);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setPlayer(!player);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <Board player={player} squares={currentSquares} onClick={handlePlay} />
      </div>
      <div className="">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};

export default Game;
