import { TComment } from '../../types/comment';
import { formatReviewDate } from '../../utils';

type ReviewProps = {
  review: TComment;
}

function Review({review}: ReviewProps): JSX.Element {
  const {date, user, comment, rating} = review;

  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={date}>{formatReviewDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
