import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { promoFilm } from './consts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { favoriteFilms, detailFilms, similarFilms } from './mocks/films';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        favoriteFilms={favoriteFilms}
        detailFilms={detailFilms}
        similarFilms={similarFilms}
        promoFilm={promoFilm}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
