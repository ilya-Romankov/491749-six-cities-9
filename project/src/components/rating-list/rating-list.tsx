import RatingStar from '../rating-star/rating-star';
import {RATING_VALUE} from '../../constant';
import {ChangeEvent} from 'react';

type RatingListProps = {
  onChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingList({onChangeRating}: RatingListProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_VALUE.map((rating) => (
        <RatingStar
          key={rating}
          onChangeRating={onChangeRating}
          rating={rating}
        />
      ))}
    </div>
  );
}

export default  RatingList;
