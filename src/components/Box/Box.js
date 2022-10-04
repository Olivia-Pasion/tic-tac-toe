// react
import { useContext } from 'react';

// context
import { GameContext } from '../../context/GameContext';

export default function Box({ space, content }) {
  const { updateSpace } = useContext(GameContext);
  return (
    <div onClick={() => updateSpace(space)} id={space} className="box">
      {content}
    </div>
  );
}
