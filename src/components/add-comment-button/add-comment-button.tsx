import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../consts';

type AddCommentButtonProps = {
  id: string;
}

function AddCommentButton({id}: AddCommentButtonProps): JSX.Element {
  return (
    <Link to={generatePath(AppRoute.AddReview, { id: id })} className="btn film-card__button">Add review</Link>
  );
}

export default AddCommentButton;
