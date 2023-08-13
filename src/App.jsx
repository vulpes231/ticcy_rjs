import { useState } from "react";
import Game from "./components/Game";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl p-4">Tic Tac Toe</h1>
      <Game />
    </>
  );
}

export default App;
