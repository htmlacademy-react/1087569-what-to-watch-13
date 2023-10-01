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
      <PlayButton />
      <FavoriteButton />
      {!isMainPage && <AddCommentButton id={id} isAuthorized={isAuthorized}/>}
    </div>
  );
}

export default FilmButtonsList;
