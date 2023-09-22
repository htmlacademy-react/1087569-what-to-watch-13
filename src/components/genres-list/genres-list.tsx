import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { setActiveGenre } from '../../store/films-process/films-process.slice';
import { AppRoute } from '../../consts';

type GenresListProps = {
  genres: string[];
  activeGenre: string;
}

function GenresList({genres, activeGenre}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const genre = evt.currentTarget.innerText;

    if(genre === activeGenre) {
      return;
    }

    dispatch(setActiveGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={cn(
            'catalog__genres-item',
            {'catalog__genres-item--active': activeGenre === genre}
          )}
          key={genre}
          onClick={handleClick}
        >
          <Link to={AppRoute.Main} className="catalog__genres-link">{genre}</Link>
        </li>)
      )}
    </ul>
  );
}

export default GenresList;
