import CitiesItem from '../cities-item/cities-item';
import {Cities} from '../../constant';


function CitiesList(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <CitiesItem
            key={city}
            city={city}
          />
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
