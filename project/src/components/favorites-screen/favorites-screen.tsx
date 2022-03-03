import {Hostel} from '../../types/hostel';
import FavoriteList from '../favorite-list/favorite-list';

type FavoritesScreenProps = {
  hostel: Hostel[];
}

function FavoritesScreen({hostel}: FavoritesScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList hostels={hostel} />
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
