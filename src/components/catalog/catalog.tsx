import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { getActiveGenre } from '../../store/films-process/films-process.selectors';
import { getFilms } from '../../store/films-process/films-process.selectors';
import { getGenres, getFilmsByGenre } from '../../utils';
import { useState, useEffect } from 'react';
import { DEFAULT_FILMS_COUNT } from '../../consts';

function Catalog(): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const genres = getGenres(films);
  const filmsByGenre = getFilmsByGenre(films, activeGenre);
  const [filmsCount, setFilmsCount] = useState(DEFAULT_FILMS_COUNT);

  useEffect(() => {
    setFilmsCount(DEFAULT_FILMS_COUNT);
  }, [activeGenre]);

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList genres={genres} activeGenre={activeGenre} />

      <CardsList films={filmsByGenre} filmsCount={filmsCount} />

      {filmsCount < filmsByGenre.length && <ShowMoreButton filmsCount={filmsCount} onClick={setFilmsCount} />}
    </section>
  );
}

export default Catalog;
