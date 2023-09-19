import { TABS, AppRoute } from '../../consts';
import { Link, generatePath } from 'react-router-dom';
import cn from 'classnames';
import { MouseEvent } from 'react';

type TabsProps = {
  filmId: string;
  activeTab: string;
  handleClick: (evt: MouseEvent<HTMLElement>) => void;
}

function Tabs({filmId, activeTab, handleClick}: TabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        { TABS.map((tab) => (
          <li
            key={tab}
            className={cn(
              'film-nav__item',
              {'film-nav__item--active' : activeTab === tab}
            )}
            onClick={handleClick}
          >
            <Link to={generatePath(AppRoute.Film, { id: filmId })} className="film-nav__link">{tab}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Tabs;
