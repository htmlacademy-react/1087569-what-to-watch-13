import { DEFAULT_FILMS_COUNT } from '../../consts';

type ShowMoreButtonProps = {
  filmsCount: number;
  onClick: (filmsCount: number) => void;
}

function ShowMoreButton({filmsCount, onClick}: ShowMoreButtonProps): JSX.Element {
  const handleClick = () => {
    onClick(filmsCount + DEFAULT_FILMS_COUNT);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleClick}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
