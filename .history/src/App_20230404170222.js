
import './App.css';
import Box from './components/Box';

function App() {
  const board = ["X"]
  return (
    <div className="App">
      <Box value="X" onClick={null}/>
    </div>
  );
}

export default App;
