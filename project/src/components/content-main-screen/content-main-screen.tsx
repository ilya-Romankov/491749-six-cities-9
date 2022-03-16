import {useState} from 'react';
import ListHostel from '../list-hostel/list-hostel';
import Map from '../map/map';
import {CityLeaflet} from '../../types/city';
import {Hostel} from '../../types/hostel';
import {Amsterdam} from '../../constant';

type ContentMainScreenProps = {
  hostels: Hostel[];
}

function ContentMainScreen({hostels}: ContentMainScreenProps): JSX.Element {
  const offersCount = hostels.length;
  const [activeCard, setActiveCard] = useState<Hostel | undefined>(undefined);
  const [cityLeaflet] = useState<CityLeaflet>(Amsterdam);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref={'#icon-arrow-select'}></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>

          <ListHostel hostels={hostels} getActiveCard={setActiveCard}/>
        </section>
        <div className="cities__right-section">
          <Map city={cityLeaflet} hostels={hostels} activeHostel={activeCard}/>
        </div>
      </div>
    </div>
  );
}

export default ContentMainScreen;
