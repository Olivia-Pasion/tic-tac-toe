// react
import { useContext } from 'react';

// context
import { GameContext } from '../../context/GameContext';

export default function Header() {
  const { message, active, newGame } = useContext(GameContext);
  return (
    <div>
      <h3>{message}</h3>
      {!active && <button onClick={newGame}> Play Again</button>}
    </div>
  );
}
