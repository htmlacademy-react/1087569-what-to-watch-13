import dayjs from 'dayjs';
import { TFilmDetail } from './types/film';
import { TComment } from './types/comment';

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

export const formatReviewDate = (reviewDate: TComment['date']) => reviewDate ? dayjs(reviewDate).format(DATE_REVIEW_FORMAT) : '';
