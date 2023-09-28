import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../consts';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { MouseEvent } from 'react';

type HeaderProps = {
  isAuthorized: boolean;
}

function Header({ isAuthorized }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLogoutClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className={cn(
      'page-header',
      { 'film-card__head': isAuthorized }
    )}
    >
      <Logo />
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
