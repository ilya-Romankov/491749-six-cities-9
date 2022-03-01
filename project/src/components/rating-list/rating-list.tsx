import RatingStar from '../rating-star/rating-star';
import {RatingValue} from '../../constant';
import {ChangeEvent} from 'react';

type RatingListProps = {
  changeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingList({changeRating}: RatingListProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingValue.map((rating) => <RatingStar key={rating} changeRating={changeRating} rating={rating} />)}
    </div>
  );
}

export default  RatingList;
