import {ChangeEvent} from 'react';

type RatingStarProps = {
  rating: string;
  onChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({rating, onChangeRating}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={(evt) => onChangeRating(evt)}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
