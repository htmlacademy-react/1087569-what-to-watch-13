import Logo from '../logo/logo';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { TFilmDetail } from '../../types/film';
import cn from 'classnames';
import { AppRoute } from '../../consts';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserAvatar } from '../../store/user-process/user-process.selectors';
import { MouseEvent } from 'react';

type HeaderProps = {
  isAuthorized: boolean;
  isPromo?: boolean;
  isFilmPage?: boolean;
  isCommentPage?: boolean;
  isMyList?: boolean;
  filmId?: TFilmDetail['id'];
  filmName?: TFilmDetail['name'];
  favoriteFilmsCount?: number;
}

function Header({ isAuthorized, isPromo, isFilmPage, isCommentPage, isMyList, filmId, filmName, favoriteFilmsCount }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userAvatarUrl = useAppSelector(getUserAvatar);

  const handleLogoutClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const handleAvatarClick = () => navigate(AppRoute.MyList);

  return (
    <header className={cn(
      'page-header',
      { 'film-card__head': isAuthorized && isPromo || isFilmPage },
      {'user-page__head': isMyList}
    )}
    >
      <Logo />
      {
        isMyList ?
          <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{favoriteFilmsCount}</span>
          </h1> : ''
      }
      {
        isCommentPage && filmId &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={generatePath(AppRoute.Film, { id: filmId })} className="breadcrumbs__link">{filmName}</Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
      }
      {
        isAuthorized ?
          <ul className="user-block">
            <li className="user-block__item" onClick={handleAvatarClick}>
              <div className="user-block__avatar">
                <img src={userAvatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link
                to={AppRoute.Main}
                className="user-block__link"
                onClick={handleLogoutClick}
              >Sign out
              </Link>
            </li>
          </ul>
          :
          <div className="user-block">
            <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
          </div>
      }
    </header>
  );
}

export default Header;
