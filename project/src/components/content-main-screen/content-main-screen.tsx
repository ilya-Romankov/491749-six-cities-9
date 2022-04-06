import {useState} from 'react';
import ListHostel from '../list-hostel/list-hostel';
import Map from '../map/map';
import SortList from '../sort-list/sort-list';
import {Hostel} from '../../types/hostel';
import {useAppSelector} from '../../hooks/useAppSelector';

function ContentMainScreen(): JSX.Element {
  const {currentCity, currentDataCity} = useAppSelector((state) => state);
  const groupCity = useAppSelector((state) => state.groupCities[currentCity]);
  const offersCount = groupCity.length;
  const [activeCard, setActiveCard] = useState<Hostel | undefined>(undefined);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in {currentCity}</b>
          <SortList />
          <ListHostel hostels={groupCity} getActiveCard={setActiveCard}/>
        </section>
        <div className="cities__right-section">
          <Map city={currentDataCity} hostels={groupCity} activeHostel={activeCard}/>
        </div>
      </div>
    </div>
  );
}

export default ContentMainScreen;
