import { TFilm } from '../../types/film';
import MainCard from '../main-card/main-card';

type CardsListProps = {
  films: TFilm[];
}

function CardsList({films}: CardsListProps): JSX.Element {
  return(
    <div className="catalog__films-list">
      {films.map((film) =>
        <MainCard key={film.id} film={film} />
      )}
    </div>
  );
}

export default CardsList;
