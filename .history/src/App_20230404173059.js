import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';


function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    
  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O';
      } else {
        return value;
      }

    })

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick}/>


    </div>
  );
}

export default App;