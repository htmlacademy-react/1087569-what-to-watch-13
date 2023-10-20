import { ChangeEvent, FormEvent, useState, Fragment, useEffect } from 'react';
import { RATING_VALUES_COUNT, CommentLengthLimit, RequestStatus, APIRoute, Tabs } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSendingCommentStatus } from '../../store/comments-process/comments.process.selectors';
import { postCommentAction } from '../../store/api-actions';
import { TFilmDetail } from '../../types/film';
import { dropSendingStatus } from '../../store/comments-process/comments-process.slice';
import { useNavigate } from 'react-router-dom';

type FormCommentProps = {
  filmId: TFilmDetail['id'];
}

function FormComment({filmId}: FormCommentProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sendingStatus = useAppSelector(getSendingCommentStatus);
  const preparedRatingValues = Array.from({length: RATING_VALUES_COUNT}, (_v, k) => k + 1).reverse();

  const isValid =
    comment.length >= CommentLengthLimit.Min &&
    comment.length <= CommentLengthLimit.Max &&
    rating !== '';

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postCommentAction({ commentData: { comment, rating: +rating }, filmId }));
  };

  useEffect(() => {
    if (sendingStatus === RequestStatus.Success) {
      setComment('');
      setRating('');
      navigate(`${APIRoute.Films}/${filmId}?tab=${Tabs.Reviews}`);
    }

    if (sendingStatus === RequestStatus.Error) {
      setErrorMessage('Posting a comment is currently not possible. Please try again.');
    }

    dispatch(dropSendingStatus());
  }, [sendingStatus, dispatch, navigate, filmId]);

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {preparedRatingValues.map((item) => (
              <Fragment key={item}>
                <input
                  className="rating__input"
                  id={`star-${item}`}
                  type="radio"
                  name="rating"
                  value={item}
                  onChange={handleRatingChange}
                  checked={+rating === item}
                  disabled={sendingStatus === RequestStatus.Pending}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${item}`}
                >{`Rating ${item}`}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div className="add-review__text">
          <textarea
            onChange={handleCommentChange}
            value={comment}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            disabled={sendingStatus === RequestStatus.Pending}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isValid || sendingStatus === RequestStatus.Pending}
            >Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormComment;
