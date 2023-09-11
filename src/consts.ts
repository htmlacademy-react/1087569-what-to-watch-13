export const Setting = {
  CardsCount: 20
};

export const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  dateRelease: 2014
};

export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
  NotFound: '*'
} as const;
