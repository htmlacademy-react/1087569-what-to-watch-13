import { MouseEvent } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { AppRoute } from '../../consts';

type PlayButtonProps = {
  id: string;
}

function PlayButton({id}: PlayButtonProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(generatePath(AppRoute.Player, {id: id}));
  };

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
