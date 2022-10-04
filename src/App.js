// component
import Board from './components/Board/Board';
import Header from './components/Header/Header';

// style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Try Your Knack at Tic-Tac!... toe</h1>
      <Header />
      <Board />
    </div>
  );
}

export default App;
