import { TFilm } from '../../types/film';
import MainCard from '../main-card/main-card';
import { useState, MouseEvent, useCallback } from 'react';

type CardsListProps = {
  films: TFilm[];
  filmsCount: number;
}

function CardsList({films, filmsCount}: CardsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TFilm | undefined>(undefined);

  const handleMouseEnterItem = useCallback((evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const currentCard = films.find((film) => film.id === evt.currentTarget.dataset.id);
    setActiveCard(currentCard);
  }, [films]);

  const handleMouseLeaveItem = useCallback(() => {
    setActiveCard(undefined);
  }, []);

  return(
    <div className="catalog__films-list">
      {
        films.slice(0, filmsCount).map((film) => (
          <MainCard
            key={film.id}
            film={film}
            onMouseEnterHandler={handleMouseEnterItem}
            onMouseLeaveHandler={handleMouseLeaveItem}
            isActive={activeCard?.id === film.id}
          />
        ))
      }
    </div>
  );
}

export default CardsList;
