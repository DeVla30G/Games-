import React from 'react';
import { useState } from 'react';
import Board from '../components/Board';

const Player1 = 'X';
const Player2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
};

const NewGame = () => {
    
const [squares, setSquares] = useState(generateSquares());

const searchWin = () => {

}

const resetGame = () => {

}


return (
  <div className="App">
    <header className="App-header">
      <h1>React Tic Tac Toe</h1>
      <h2>The winner is ... -- Fill in for wave 3 </h2>
      <button>Reset Game</button>
    </header>
    <main>
      <Board squares={squares} />
    </main>
  </div>
);

}
export default NewGame;
  