import { useState } from "react";
import Button from "./Button";

const Board = ({ player, squares, onClick }) => {
  // pick option
  const options = ["X", "O"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function pickOption(option) {
    setSelectedOption(option);
    console.log(option);
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (player) {
      nextSquares[i] = selectedOption;
    } else {
      if (selectedOption === "X") {
        nextSquares[i] = "O";
      } else {
        nextSquares[i] = "X";
      }
    }

    onClick(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let gameStatus;

  if (winner) {
    gameStatus = winner + " wins!";
  } else {
    gameStatus =
      "Next turn: " +
      (player ? selectedOption : selectedOption === "X" ? "O" : "X");
  }
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <p>Play as:</p>
        <span>
          <input
            type="radio"
            value={options[0]}
            checked={selectedOption === options[0]}
            onChange={() => pickOption(options[0])}
          />
          <p>X</p>
        </span>
        <span>
          <input
            type="radio"
            value={options[1]}
            checked={selectedOption === options[1]}
            onChange={() => pickOption(options[1])}
          />
          <p>O</p>
        </span>
      </div>
      <h3 className="text-2xl">{gameStatus}</h3>
      <div className="flex gap-4">
        <Button value={squares[0]} onClick={() => handleClick(0)} />
        <Button value={squares[1]} onClick={() => handleClick(1)} />
        <Button value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="flex gap-4">
        <Button value={squares[3]} onClick={() => handleClick(3)} />
        <Button value={squares[4]} onClick={() => handleClick(4)} />
        <Button value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="flex gap-4">
        <Button value={squares[6]} onClick={() => handleClick(6)} />
        <Button value={squares[7]} onClick={() => handleClick(7)} />
        <Button value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
