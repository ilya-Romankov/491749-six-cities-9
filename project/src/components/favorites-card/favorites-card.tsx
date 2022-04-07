import {Link} from 'react-router-dom';
import {Hostel} from '../../types/hostel';
import AddFavorite from '../add-favorite/add-favorite';

type FavoritesHostelProps = {
  cityName: string;
  hostels: Hostel[];
}

function FavoritesCard({cityName, hostels}: FavoritesHostelProps): JSX.Element | null {
  if (hostels.length === 0) {
    return null;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hostels.map(({id, price, previewImage, title, type, isFavorite}) => (
          <article key={id} className="favorites__card place-card">
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={`/offer/${id}`}>
                <img
                  className="place-card__image"
                  src= {previewImage}
                  width="150"
                  height="110"
                  alt="Place"
                />
              </Link>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <AddFavorite isFavorite={isFavorite} id={id}/>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: '100%'}}></span>
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
        ))}
      </div>
    </li>
  );
}

export default FavoritesCard;
