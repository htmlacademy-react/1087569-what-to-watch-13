import { TFilm } from '../../types/film';
import MainCard from '../main-card/main-card';
import { useState, MouseEvent } from 'react';

type CardsListProps = {
  films: TFilm[];
}

function CardsList({films}: CardsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TFilm | undefined>(undefined);

  const handleMouseEnterItem = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const currentCard = films.find((film) => film.id === evt.currentTarget.dataset.id);
    setActiveCard(currentCard);
  };

  const handleMouseLeaveItem = () => {
    setActiveCard(undefined);
  };

  return(
    <div className="catalog__films-list">
      {
        films.map((film) => (
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
