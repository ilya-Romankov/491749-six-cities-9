import {ClassesOnPage} from './types/classes';
import {ClassesOnHostelList} from './types/classes';
import {CityLeaflet} from './types/city';
import {Sorts} from './types/sorts';

export enum AppRoute {
  Main = '/',
  Sign_In = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Not_Found = '*'
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
