import {MouseEvent} from 'react';
import {currentCity, currentSort} from '../../store/action';
import {CityName} from '../../types/city';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {SortKey} from '../../constant';

type CitiesItemProps = {
  city: CityName;
}

function CitiesItem({city}: CitiesItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handlerChangeCity = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(currentCity(city));
    dispatch(currentSort(SortKey.POPULAR));
  };

  const currentCityOnPage = useAppSelector((state) => state.currentCity);

  return (
    <li className="locations__item">
      <a
        onClick={(evt) => handlerChangeCity(evt)}
        className={`locations__item-link tabs__item ${ currentCityOnPage === city ? 'tabs__item tabs__item--active' : ''}`}
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