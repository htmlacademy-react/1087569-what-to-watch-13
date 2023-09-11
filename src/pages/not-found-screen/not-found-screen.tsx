import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../consts';

function NotFoundScreen(): JSX.Element {
  return(
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>На главную</Link>
    </>
  );
}

export default NotFoundScreen;
