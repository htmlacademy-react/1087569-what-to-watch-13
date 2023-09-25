import { useAppDispatch } from '../../hooks';
import { fetchFilmsAction } from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchFilmsAction());
  };

  return (
    <>
      <p className="error__text">Не удалось загрузить вопросы</p>
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
