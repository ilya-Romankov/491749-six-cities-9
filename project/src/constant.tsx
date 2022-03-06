import {ClassesOnPage} from './types/classes';

export enum AppRoute {
  Main = '/',
  Sign_In = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Not_Found = '*'
}

export const classesOnPage: ClassesOnPage = {
  [AppRoute.Main]: {
    mainPage: 'page page--gray page--main',
  },
  [AppRoute.Sign_In]: {
    mainPage: 'page page--gray page--login',
  },
  [AppRoute.Favorites]: {
    mainPage: 'page',
  },
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RatingValue: string[] = ['5', '4', '3', '2', '1'];


