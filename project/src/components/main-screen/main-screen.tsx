import CitiesList from '../cities-list/cities-list';
import EmptyMainScreen from '../empty-main-screen/empty-main-screen';
import ContentMainScreen from '../content-main-screen/content-main-screen';
import {Hostel} from '../../types/hostel';
import {useAppSelector} from '../../hooks/useAppSelector';

type MainScreenProps = {
  hostels: Hostel[];
}

function MainScreen({hostels}: MainScreenProps): JSX.Element {
  const currentCityOnPage = useAppSelector((state) => state.currentCity);
  const currentHostels = hostels.filter((hostel) => currentCityOnPage === hostel.city.name);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList />
      </div>
      {currentHostels.length !== 0 ? <ContentMainScreen hostels={currentHostels} /> : <EmptyMainScreen />}
    </main>
  );
}

export default MainScreen;
