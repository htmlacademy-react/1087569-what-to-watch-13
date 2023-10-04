import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { getActiveGenre } from '../../store/films-process/films-process.selectors';
import { getFilms, getFilmsCount } from '../../store/films-process/films-process.selectors';
import { getGenres, getFilmsByGenre } from '../../utils';

function Catalog(): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const filmsCount = useAppSelector(getFilmsCount);
  const genres = getGenres(films);
  const filmsByGenre = getFilmsByGenre(films, activeGenre);

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList genres={genres} activeGenre={activeGenre} />

      <CardsList films={filmsByGenre} />

      {filmsCount < filmsByGenre.length && <ShowMoreButton />}
    </section>
  );
}

export default Catalog;
