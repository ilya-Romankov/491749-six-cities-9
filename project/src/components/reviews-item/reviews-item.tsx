import {Comments} from '../../types/comment';
import {getFormatDate} from '../../helper/date';
import {INDEX_RATING} from '../../constant';

type ReviewsItemProps = {
  commentData: Comments;
}

function ReviewsItem({commentData}: ReviewsItemProps): JSX.Element {
  const {comment, date, rating} = commentData;
  const {name, avatarUrl} = commentData.user;
  const activeRating = INDEX_RATING * rating;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            style={{height: '100%'}}
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${activeRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toString()}>{getFormatDate(date)}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
