import { TComment } from '../../types/comment';
import Review from '../review/review';

type FilmReviewsProps = {
  comments: TComment[];
}

function FilmReviews({ comments }: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, Math.ceil(comments.length / 2)).map((comment) =>
          <Review key={comment.id} review={comment} />
        )}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(Math.ceil(comments.length / 2), comments.length).map((comment) =>
          <Review key={comment.id} review={comment} />
        )}
      </div>
    </div>
  );
}

export default FilmReviews;
