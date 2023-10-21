import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleBoxClick = (boxIdx) => {
    const newBoard = [...board];
    newBoard[boxIdx] = 'X';
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <Board board={board} onClick={null}/>


    </div>
  );
}

export default App;
