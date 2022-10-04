import { useGame } from '../../context/GameContext';

export default function Box({ space, content }) {
  const { updateSpace } = useGame();
  return (
    <div onClick={() => updateSpace(space)} id={space} className="box">
      {content}
    </div>
  );
}
