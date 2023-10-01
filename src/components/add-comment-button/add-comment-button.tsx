import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../consts';

type AddCommentButtonProps = {
  id: string;
  isAuthorized: boolean;
}

function AddCommentButton({id, isAuthorized}: AddCommentButtonProps): JSX.Element {
  return (isAuthorized ?
    <Link to={generatePath(AppRoute.AddReview, { id: id })} className="btn film-card__button">Add review</Link>
    :
    <Link to={AppRoute.SignIn} className="btn film-card__button">Add review</Link>);
}

export default AddCommentButton;
