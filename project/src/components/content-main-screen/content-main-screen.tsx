import {useState} from 'react';
import ListHostel from '../list-hostel/list-hostel';
import Map from '../map/map';
import SortList from '../sort-list/sort-list';
import {useAppSelector} from '../../hooks/useAppSelector';
import {CityLeaflet} from '../../types/city';
import {Hostel} from '../../types/hostel';
import {Amsterdam} from '../../constant';

function ContentMainScreen(): JSX.Element {
  const currentCityOnPage = useAppSelector((state) => state.currentCity);
  const groupCity = useAppSelector((state) => state.groupCities[currentCityOnPage]);
  const offersCount = groupCity.length;
  const [activeCard, setActiveCard] = useState<Hostel | undefined>(undefined);
  const [cityLeaflet] = useState<CityLeaflet>(Amsterdam);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in Amsterdam</b>
          <SortList />

          <ListHostel hostels={groupCity} getActiveCard={setActiveCard}/>
        </section>
        <div className="cities__right-section">
          <Map city={cityLeaflet} hostels={groupCity} activeHostel={activeCard}/>
        </div>
      </div>
    </div>
  );
}

export default ContentMainScreen;
