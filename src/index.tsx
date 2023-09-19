import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { promoFilm } from './consts';
import { films, favoriteFilms, detailFilms, similarFilms } from './mocks/films';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={films}
      favoriteFilms={favoriteFilms}
      detailFilms={detailFilms}
      similarFilms={similarFilms}
      promoFilm={promoFilm}
      comments={comments}
    />
  </React.StrictMode>
);
