import {CityForRandom} from '../constant';

export const pickRandomCity = () => {
  const rand = Math.floor(Math.random() * CityForRandom.length);
  return CityForRandom[rand];
};
