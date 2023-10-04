export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}

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

export const NameSpace = {
  Films: 'FILMS',
  Film: 'FILM',
  PromoFilm: 'PROMO_FILM',
  SimilarFilms: 'SIMILAR_FILMS',
  FavoriteFilms: 'FAVORITE_FILMS',
  Comments: 'COMMENTS',
  User: 'USER',
  App: 'APP'
} as const;

export const DEFAULT_GENRE = 'All genres';
export const DEFAULT_FILMS_COUNT = 8;

export const BACKEND_URL = 'https://13.design.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const APIRoute = {
  Films: '/films',
  Promo: '/promo',
  Favorite: '/favorite',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout'
} as const;

export const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';

export enum RequestStatus {
  Unsent = 'UNSENT',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export enum VideoStatus {
  Start = 'START',
  Play = 'PLAY',
  Pause = 'PAUSE'
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 400;
export const RATING_VALUES_COUNT = 10;
export const TIME_LEFT_FORMAT_MINUTES = '-mm:ss';
export const TIME_LEFT_FORMAT_HOURS = '-HH:mm:ss';
