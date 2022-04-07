import {Link} from 'react-router-dom';
import {Hostel} from '../../types/hostel';
import AddFavorite from '../add-favorite/add-favorite';

type HostelCardProps = {
  hostel: Hostel;
  getActiveCard: () => void;
  classes: string;
}

function HostelCard({hostel,  getActiveCard, classes}: HostelCardProps): JSX.Element {
  const {previewImage, price, title, type, id, isPremium, isFavorite} = hostel;

  return (
    <article
      className={classes}
      onMouseOver={getActiveCard}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <AddFavorite id={id} isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default HostelCard;
