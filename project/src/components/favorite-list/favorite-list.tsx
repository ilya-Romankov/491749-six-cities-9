import {useAppSelector} from '../../hooks/useAppSelector';
import FavoritesCard from '../favorites-card/favorites-card';
import {groupByCity} from '../../helper/data-group';

function FavoriteList(): JSX.Element {
  const {favoritesHostel} = useAppSelector(({DATA}) => DATA);
  const hostelsGroupByCity = Object.entries(groupByCity(favoritesHostel));

  return (
    <ul className="favorites__list">
      {hostelsGroupByCity.map(([city, hostel]) => (
        <FavoritesCard
          key={city}
          cityName={city}
          hostels={hostel}
        />
      ))}
    </ul>
  );
}

export default FavoriteList;
