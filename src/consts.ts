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

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const TABS = ['Overview', 'Details', 'Reviews'];
