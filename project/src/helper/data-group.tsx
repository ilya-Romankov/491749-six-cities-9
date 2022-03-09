import {Hostel} from '../types/hostel';
import {Cities} from '../types/city';

export const groupByCity = (offers:Hostel[]): Cities => [...offers].reduce((acc: Cities, curr: Hostel) => {
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

