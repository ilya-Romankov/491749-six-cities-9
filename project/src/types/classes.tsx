import {AppRoute} from '../constant';

export type ActiveClasses = {
  mainPage: string,
}

export type ClassesOnPage = {
  [AppRoute.Main]: ActiveClasses,
  [AppRoute.Sign_In]: ActiveClasses,
  [AppRoute.Favorites]: ActiveClasses,
}
