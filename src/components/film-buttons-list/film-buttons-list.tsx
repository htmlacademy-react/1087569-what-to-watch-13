import PlayButton from '../play-button/play-button';
import FavoriteButton from '../favorite-button/favorite-button';
import AddCommentButton from '../add-comment-button/add-comment-button';
import ErrorMessage from '../error-message/error-message';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { getChangeStatusError } from '../../store/favorite-process/favorite-process.selectors';
import { dropChangeStatusError } from '../../store/favorite-process/favorite-process.slice';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';

type FilmButtonsListProps = {
  id: string;
  isAuthorized: boolean;
}

function FilmButtonsList({id, isAuthorized}: FilmButtonsListProps): JSX.Element {
  const {pathname} = useLocation();
  const isMainPage = pathname === AppRoute.Main;
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(getChangeStatusError);

  useEffect(() => {
    dispatch(dropChangeStatusError());
  }, [dispatch]);

  return (
    <div className="film-card__buttons">
      <PlayButton id={id} />
      {isAuthorized && <FavoriteButton id={id} />}
      {!isMainPage && isAuthorized && <AddCommentButton id={id} />}
      {hasError && <ErrorMessage />}
    </div>
  );
}

export default FilmButtonsList;
