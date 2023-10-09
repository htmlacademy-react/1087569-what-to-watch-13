import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { TFilm, TFilmDetail } from './types/film';
import { TComment } from './types/comment';
import { DEFAULT_GENRE, TIME_LEFT_FORMAT_HOURS, TIME_LEFT_FORMAT_MINUTES, MAX_UNIC_GENRES_COUNT } from './consts';

dayjs.extend(duration);

export const getRatingLevel = (rating: number) => {
  if(rating >= 0 && rating < 3) {
    return 'Bad';
  }

  if(rating >= 3 && rating < 5) {
    return 'Normal';
  }

  if(rating >= 5 && rating < 8) {
    return 'Good';
  }

  if(rating >= 8 && rating < 10) {
    return 'Very good';
  }

  if(rating === 10) {
    return 'Awesome';
  }

  return '';
};

const DATE_REVIEW_FORMAT = 'MMMM D, YYYY';

export const formatFilmRunTime = (runTime: TFilmDetail['runTime']) => {
  if (runTime / 60 > 1) {
    let hours = 0;
    let minutes = 0;
    hours = Math.floor(runTime / 60);
    minutes = runTime % 60;
    return `${hours}h ${minutes}m`;
  }

  return `${runTime}m`;
};

export const upperCaseFirst = (str: string) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};

export const formatReviewDate = (reviewDate: TComment['date']) => reviewDate ? dayjs(reviewDate).format(DATE_REVIEW_FORMAT) : '';
export const formatTimeLeft = (timeLeft: number) => {
  if(!timeLeft) {
    return '';
  }
  const timeDuration = dayjs.duration(timeLeft, 'seconds');

  return timeLeft < 3600 ? timeDuration.format(TIME_LEFT_FORMAT_MINUTES) : timeDuration.format(TIME_LEFT_FORMAT_HOURS);
};

export const getGenres = (films: TFilm[]) => {
  const genres = [DEFAULT_GENRE];
  const unicGenres = Array.from(new Set(films.map((film) => film.genre))).sort();
  return unicGenres.length <= MAX_UNIC_GENRES_COUNT ? genres.concat(unicGenres) : genres.concat(unicGenres.slice(0, MAX_UNIC_GENRES_COUNT));
};

export const getFilmsByGenre = (films: TFilm[], activeGenre: string) => (
  activeGenre === DEFAULT_GENRE ? films : films.filter((film) => film.genre === activeGenre)
);
