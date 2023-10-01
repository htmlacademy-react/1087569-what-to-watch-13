import Logo from '../logo/logo';
import { Link, generatePath } from 'react-router-dom';
import { TFilmDetail } from '../../types/film';
import cn from 'classnames';
import { AppRoute } from '../../consts';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { MouseEvent } from 'react';

type HeaderProps = {
  isAuthorized: boolean;
  isPromo?: boolean;
  isFilmPage?: boolean;
  isCommentPage?: boolean;
  isMyList?: boolean;
  filmId?: TFilmDetail['id'];
  filmName?: TFilmDetail['name'];
}

function Header({ isAuthorized, isPromo, isFilmPage, isCommentPage, isMyList, filmId, filmName }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLogoutClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className={cn(
      'page-header',
      { 'film-card__head': isAuthorized && isPromo || isFilmPage },
      {'user-page__head': isMyList}
    )}
    >
      <Logo />
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
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link
                to={AppRoute.MyList}
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
