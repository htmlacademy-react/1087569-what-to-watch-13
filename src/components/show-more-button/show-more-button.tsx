import { useAppDispatch } from '../../hooks';
import { changeFilmsCount } from '../../store/films-process/films-process.slice';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeFilmsCount());
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
