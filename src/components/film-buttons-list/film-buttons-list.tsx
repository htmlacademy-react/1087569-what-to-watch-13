import PlayButton from '../play-button/play-button';
import FavoriteButton from '../favorite-button/favorite-button';
import AddCommentButton from '../add-comment-button/add-comment-button';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../consts';

type FilmButtonsListProps = {
  id: string;
  isAuthorized: boolean;
}

function FilmButtonsList({id, isAuthorized}: FilmButtonsListProps): JSX.Element {
  const {pathname} = useLocation();
  const isMainPage = pathname === AppRoute.Main;

  return (
    <div className="film-card__buttons">
      <PlayButton id={id} />
      <FavoriteButton id={id} />
      {!isMainPage && isAuthorized && <AddCommentButton id={id} />}
    </div>
  );
}

export default FilmButtonsList;
