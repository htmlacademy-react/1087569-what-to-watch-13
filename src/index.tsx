import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting, promoFilm } from './consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardsCount={Setting.CardsCount}
      promoFilm={promoFilm}
    />
  </React.StrictMode>
);
