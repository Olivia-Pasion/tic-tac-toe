import { useGame } from '../../context/GameContext';
import { Box } from '../Box/Box';

export default function Board() {
  const { board } = useGame();
  return (
    <div className="board">
      {board.map(({ space, content }) => (
        <Box key={space} space={space} content={content} />
      ))}
    </div>
  );
}
