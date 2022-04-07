import {MouseEvent} from 'react';
import {CityName} from '../../types/city';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {AllCity, SortKey} from '../../constant';
import {currentCity, currentDataCity, currentSort} from '../../store/city-process/city-process';

type CitiesItemProps = {
  city: CityName;
}

function CitiesItem({city}: CitiesItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handlerChangeCity = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(currentCity(city));
    dispatch(currentSort(SortKey.POPULAR));
    dispatch(currentDataCity(Object.values(AllCity).find((cityData) => cityData.name === city)));
  };

  const currentCityOnPage = useAppSelector(({CITY}) => CITY.currentCity);

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
