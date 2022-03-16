import {CityName} from '../../types/city';
import {MouseEvent} from 'react';

type CitiesItemProps = {
  city: CityName;
  isActiveClass: boolean;
  setActiveCity: (evt: MouseEvent<HTMLAnchorElement>, city: CityName) => void,
}

function CitiesItem({city, isActiveClass, setActiveCity}: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        onClick={(evt) => setActiveCity(evt, city)}
        className={`locations__item-link tabs__item ${isActiveClass ? 'tabs__item tabs__item--active' : ''}`}
        href="/"
      >
        <span>
          {city}
        </span>
      </a>
    </li>
  );
}

export default CitiesItem;
