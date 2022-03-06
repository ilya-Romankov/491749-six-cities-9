import {useState} from 'react';
import {Hostel} from '../../types/hostel';
import {CityLeaflet} from '../../types/city';
import ListMain from '../list-main/list-main';
import Map from '../map/map';

type MainScreenProps = {
  hostels: Hostel[];
}

function MainScreen({hostels}: MainScreenProps): JSX.Element {
  const offersCount = hostels.length;
  const [activeCard, setActiveCard] = useState<Hostel | undefined>(undefined);
  const [cityLeaflet] = useState<CityLeaflet>({
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
    name: 'Amsterdam',
  });

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a href="/" className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
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

            <ListMain hostels={hostels} getActiveCard={setActiveCard} />
          </section>
          <div className="cities__right-section">
            <Map city={cityLeaflet} hostels={hostels} activeHostel={activeCard} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
