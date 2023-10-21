
import './App.css';
import Board from './components/Board';
import Box from './components/Box';

function App() {
  const board = ["X","X","X","X","X","X","X","X","X"]
  return (
    <div className="App">
      <Board board={board}/>
      

    </div>
  );
}

export default App;
