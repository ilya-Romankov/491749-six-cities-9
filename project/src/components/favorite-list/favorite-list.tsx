import FavoritesCard from '../favorites-card/favorites-card';
import {groupByCity} from '../../helper/data-group';
import {Hostel} from '../../types/hostel';


 type FavoriteListProps = {
   hostels: Hostel[];
 }

function FavoriteList({hostels} :FavoriteListProps): JSX.Element {
  const hostelsGroupByCity = Object.entries(groupByCity(hostels));

  return (
    <ul className="favorites__list">
      {hostelsGroupByCity.map(([city, hostel], index) => (
        hostel.length > 0 && (
          <FavoritesCard
            key={city}
            cityName={city}
            hostels={hostel}
          />
        )))}
    </ul>
  );
}

export default FavoriteList;
