import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = new Array(9).fill().map((val, idx) => ({ space: idx, content: '' }));

  const [board, setBoard] = useState(initialState);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [message, setMessage] = useState(`your turn ${currentPlayer}`);
  const [active, setActive] = useState(true);



  return (
    <GameContext.Provider value={{
      board, setBoard,
      currentPlayer, setCurrentPlayer,
      message, setMessage,
      active, setActive
    }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGame must be within a GameProvider');
  }
};

export { useGame, GameProvider };