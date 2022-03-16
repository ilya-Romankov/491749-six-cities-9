import {MouseEvent} from 'react';
import {currentCity} from '../../store/action';
import CitiesItem from '../cities-item/cities-item';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {Cities} from '../../constant';
import {CityName} from '../../types/city';


function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCityOnPage = useAppSelector((state) => state.currentCity);

  const handlerChangeCity = (evt: MouseEvent<HTMLAnchorElement>, city: CityName): void => {
    evt.preventDefault();
    dispatch(currentCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <CitiesItem
            key={city}
            city={city}
            isActiveClass={city === currentCityOnPage}
            setActiveCity={handlerChangeCity}
          />
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
