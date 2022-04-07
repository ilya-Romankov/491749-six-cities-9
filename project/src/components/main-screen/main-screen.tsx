import CitiesList from '../cities-list/cities-list';
import EmptyMainScreen from '../empty-main-screen/empty-main-screen';
import ContentMainScreen from '../content-main-screen/content-main-screen';
import {useAppSelector} from '../../hooks/useAppSelector';

function MainScreen(): JSX.Element {
  const currentCityOnPage = useAppSelector(({CITY}) => CITY.currentCity);
  const groupCity = useAppSelector(({DATA}) => DATA.groupCities[currentCityOnPage]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList />
      </div>
      {groupCity.length !== 0 ? <ContentMainScreen /> : <EmptyMainScreen />}
    </main>
  );
}

export default MainScreen;
