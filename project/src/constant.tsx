import {ClassesOnPage} from './types/classes';
import {ClassesOnHostelList} from './types/classes';
import {CityLeaflet, AllCityType} from './types/city';
import {Sorts} from './types/sorts';
import {Hostel} from './types/hostel';

export enum AppRoute {
  Main = '/',
  Sign_In = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Not_Found = '*'
}

export enum ApiRoute {
  Hostels = '/hotels',
  Logout = '/logout',
  Comments = '/comments',
}

export enum Cities {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

export const classesOnPage: ClassesOnPage = {
  [AppRoute.Main]: {
    activeClasses: 'page page--gray page--main',
  },
  [AppRoute.Sign_In]: {
    activeClasses: 'page page--gray page--login',
  },
  [AppRoute.Favorites]: {
    activeClasses: 'page',
  },
};

export const emptyHostel: Hostel = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: 'Paris',
  },
  description: '',
  goods: [],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: '',
  },
  id: 0,
  images: [],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '0',
  type: '0',
};

export const classesOnHostelList: ClassesOnHostelList = {
  mainList: {
    parentElement: 'cities__places-list places__list tabs__content',
    childElement: 'cities__place-card place-card',
  },
  offerList: {
    parentElement: 'near-places__list places__list',
    childElement: 'near-places__card place-card',
  },
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_VALUE: string[] = ['5', '4', '3', '2', '1'];

export const Amsterdam: CityLeaflet = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10,
  name: 'Amsterdam',
};

export const AllCity: AllCityType = {
  PARIS: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
    name: 'Paris',
  },
  AMSTERDAM: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
    name: 'Amsterdam',
  },
  COLOGNE: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
    name: 'Cologne',
  },
  BRUSSELS: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
    name: 'Brussels',
  },
  HAMBURG: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
    name: 'Hamburg',
  },
  DUSSELDORF: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
    name: 'Dusseldorf',
  },
};

export const LINK_FOR_LEAFLET = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const INDEX_RATING = 20;

export enum FormatDate {
  CommentDate = 'MMMM YYYY',
}

export const SortKey: Sorts = {
  POPULAR: 'POPULAR',
  HIGH: 'HIGH',
  LOW: 'LOW',
  RARING: 'RATING',
};

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const SortValue= {
  [SortKey.POPULAR]: {
    title: 'Popular',
    value: SortKey.POPULAR,
  },
  [SortKey.HIGH]: {
    title: 'Price: low to high',
    value: SortKey.HIGH,
  },
  [SortKey.LOW]: {
    title: 'Price: high to low',
    value: SortKey.LOW,
  },
  [SortKey.RARING]: {
    title: 'Top rated first',
    value: SortKey.RARING,
  },
};

export const BASE_URL = 'https://9.react.pages.academy/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const TIMEOUT_SHOW_ERROR = 2000;
