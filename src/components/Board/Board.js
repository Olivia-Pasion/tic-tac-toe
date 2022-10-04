// react
import { useContext } from 'react';

// context
import { GameContext } from '../../context/GameContext';

// components
import Box from '../Box/Box';

// styles
import './Board.css';

export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <div className="board">
      {board.map(({ space, content }) => (
        <Box key={space} space={space} content={content} />
      ))}
    </div>
  );
}
