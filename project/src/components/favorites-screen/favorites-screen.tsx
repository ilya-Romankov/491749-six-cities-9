import {useEffect} from 'react';
import {store} from '../../store';
import FavoriteContent from '../favorite-content/favorite-content';
import {useAppSelector} from '../../hooks/useAppSelector';
import FavoriteEmpty from '../favorete-emty/favorite-empty';
import {fetchFavoriteHostelsAction} from '../../store/api-action';

function FavoritesScreen(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavoriteHostelsAction());
  }, []);

  const {favoritesHostel} = useAppSelector(({DATA}) => DATA);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {favoritesHostel.length !== 0 ? <FavoriteContent /> : <FavoriteEmpty />}
      </div>
    </main>
  );
}

export default FavoritesScreen;
