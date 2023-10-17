import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFavoriteFilms } from '../../store/favorite-process/favorite-process.selectors';
import { addFavoriteAction, deleteFavoriteAction } from '../../store/api-actions';

type FavoriteButtonProps = {
  id: string;
}

function FavoriteButton({id}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = favoriteFilms.some((film) => film.id === id);

  const handleButtonClick = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteAction(id));
      return;
    }

    dispatch(addFavoriteAction(id));
  };

  return(
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleButtonClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default FavoriteButton;
