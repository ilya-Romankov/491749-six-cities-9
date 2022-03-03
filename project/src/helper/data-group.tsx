import {Hostel} from '../types/hostel';
import {Citys} from '../types/city';

export const groupByCity = (offers:Hostel[]): Citys => [...offers].reduce((acc:Citys, curr:Hostel) => {
  acc[curr.city.name].push(curr);
  return acc;
}, {
  Paris: [],
  Cologne: [],
  Brussels: [],
  Amsterdam: [],
  Hamburg: [],
  Dusseldorf: [],
});

