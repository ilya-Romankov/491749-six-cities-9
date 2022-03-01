import {Hostel} from './hostel';

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Citys = {
  [key: string]: Hostel[]
}
