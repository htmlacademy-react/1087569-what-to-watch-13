import { Tabs } from '../../consts';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import { TFilmDetail } from '../../types/film';
import { TComment } from '../../types/comment';
import { transformUpperCaseFirst } from '../../utils';

type TabsProps = {
  film: TFilmDetail;
  comments: TComment[];
}

function TabsList({film, comments}: TabsProps): JSX.Element {
  const {pathname} = useLocation();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || Tabs.Overview;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(Tabs).map((tab) => (
            <li
              key={tab}
              className={cn(
                'film-nav__item',
                { 'film-nav__item--active': activeTab === tab }
              )}
            >
              <Link to={`${pathname}?tab=${tab}`} className="film-nav__link">{transformUpperCaseFirst(tab)}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === Tabs.Overview && <FilmOverview film={film}/>}
      {activeTab === Tabs.Details && <FilmDetails film={film}/>}
      {activeTab === Tabs.Reviews && <FilmReviews comments={comments}/>}

    </div>
  );
}

export default TabsList;
