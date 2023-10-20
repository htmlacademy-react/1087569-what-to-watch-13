import { useAppDispatch } from '../../hooks';
import { fetchFilmsAction, fetchFavoritesAction } from '../../store/api-actions';

type ErrorScreenProps = {
  isMyList?: boolean;
}

function ErrorScreen({isMyList}: ErrorScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isMyList) {
      dispatch(fetchFavoritesAction());
    }

    dispatch(fetchFilmsAction());
  };

  return (
    <>
      <p className="error__text">Не удалось загрузить фильмы</p>
      <button
        onClick={handleClick}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
