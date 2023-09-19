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

export const TIMER_VIDEO = 1000;

export const Tabs = {
  Overview: 'overview',
  Details: 'details',
  Reviews: 'reviews'
} as const;
