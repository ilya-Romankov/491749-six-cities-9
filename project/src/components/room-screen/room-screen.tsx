import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {store} from '../../store';
import {
  commentAction,
  fetchCommentAction,
  fetchCurrentHostelAction,
  fetchNearbyHostelsAction
} from '../../store/api-action';
import {Hostel} from '../../types/hostel';
import RatingList from '../rating-list/rating-list';
import ReviewsList from '../reviews-list/reviews-list';
import ListHostel from '../list-hostel/list-hostel';
import Map from '../map/map';
import {AllCity, AuthorizationStatus, INDEX_RATING} from '../../constant';
import AddFavoriteRoom from '../add-favorite-room/add-favorite-room';
import {sortComments} from '../../helper/sorting';

function RoomScreen(): JSX.Element {
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      store.dispatch(fetchCurrentHostelAction(Number(id)));
      store.dispatch(fetchCommentAction(Number(id)));
      store.dispatch(fetchNearbyHostelsAction(Number(id)));
    }
  }, [id]);

  const {currentHostel, comments, nearbyHostels} = useAppSelector(({DATA}) => DATA);
  const sortCommentsForPage = sortComments(comments);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {title, bedrooms, type, price, maxAdults, images, isPremium, rating, goods, description, isFavorite} = currentHostel;
  const {name, isPro, avatarUrl} = currentHostel.host;
  const ratingStar = Math.round(rating) * INDEX_RATING;
  const actualCity = Object.values(AllCity).find((cityData) => cityData.name === currentHostel.city.name);

  const [comment, setComment] = useState<string>('');
  const [sendRating, setSendRating] = useState<string>('');

  const [activeCard, setActiveCard] = useState<Hostel | undefined>(undefined);

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(evt.currentTarget.value);
  };

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>): void => {
    setSendRating(evt.currentTarget.value);
  };

  const checkValidation = ():boolean => {
    if (comment === '' || comment.length < 50 || comment.length > 300 || sendRating === '') {
      return false;
    }

    return true;
  };

  const sendCommentClickHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      store.dispatch(commentAction({
        comment,
        id,
        rating: sendRating,
      }));

      store.dispatch(fetchCommentAction(Number(id)));
      setComment('');
      setSendRating('');
      evt.currentTarget.reset();
    }
  };

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <AddFavoriteRoom isFavorite={isFavorite} id={currentHostel.id} />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${ratingStar}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What`s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li key={good} className="property__inside-item">
                    {good}
                  </li>))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                  {name}
                </span>
                {isPro &&
                  <span className="property__user-status">
                      Pro
                  </span>}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews · <span className="reviews__amount">{sortCommentsForPage.length}</span></h2>
              <ReviewsList comments={sortCommentsForPage} />
              {authorizationStatus === AuthorizationStatus.Auth &&
                <form
                  className="reviews__form form"
                  action="#"
                  method="post"
                  onSubmit={(evt) =>  sendCommentClickHandler(evt)}
                >
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <RatingList onChangeRating={handleChangeRating} />
                  <textarea
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                    onChange={(evt) => handleChangeComment(evt)}
                  >
                  </textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    {!checkValidation() ?
                      <button className="reviews__submit form__submit button" type="submit" disabled>
                        Submit
                      </button>
                      :
                      <button
                        className="reviews__submit form__submit button"
                        type="submit"
                      >
                        Submit
                      </button>}
                  </div>
                </form>}
            </section>
          </div>
        </div>
        <div className="property__map map">
          {actualCity &&
            <Map city={actualCity} hostels={nearbyHostels[currentHostel.city.name]} activeHostel={activeCard} />}

        </div>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <ListHostel hostels={nearbyHostels[currentHostel.city.name]} getActiveCard={setActiveCard} />
        </section>
      </div>
    </main>
  );
}

export default RoomScreen;
