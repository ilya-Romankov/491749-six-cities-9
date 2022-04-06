import ReviewsItem from '../reviews-item/reviews-item';
import {Comments} from '../../types/comment';

type ReviewsListProps = {
  comments: Comments[];
}

function ReviewsList({comments}: ReviewsListProps): JSX.Element | null {
  if  (comments.length === 0) {
    return null;
  }

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem
          key={comment.id}
          commentData={comment}
        />))}
    </ul>
  );
}

export default ReviewsList;
