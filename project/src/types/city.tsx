import {Hostel} from './hostel';
import {Location} from './hostel';

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Cities = {
  [key: string]: Hostel[]
}

export type CityLeaflet = Location & {
  name: CityName;
}

export type AllCityType = {
  PARIS: CityLeaflet,
  AMSTERDAM: CityLeaflet,
  COLOGNE: CityLeaflet,
  BRUSSELS: CityLeaflet,
  HAMBURG: CityLeaflet,
  DUSSELDORF: CityLeaflet,
}
