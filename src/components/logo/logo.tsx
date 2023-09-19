import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../consts';
import cn from 'classnames';

type LogoProps = {
  isFooter?: boolean;
}

function Logo({ isFooter }: LogoProps): JSX.Element {
  const { pathname } = useLocation();
  const isMainPage = pathname === AppRoute.Main;

  return (
    <div className="logo">
      {!isMainPage ?
        <Link
          to={AppRoute.Main}
          className={cn(
            'logo__link',
            { 'logo__link--light': isFooter }
          )}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
        :
        <a
          className={cn(
            'logo__link',
            { 'logo__link--light': isFooter }
          )}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>}
    </div>
  );
}

export default Logo;
