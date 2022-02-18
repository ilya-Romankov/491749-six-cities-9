export const HOSTEL_COUNT = 5;

export const HOSTEL_ARRAY: number[] = Array(HOSTEL_COUNT).fill(undefined).map((e, i) => i + 1);

export enum AppRoute {
  Main = '/',
  Sign_In = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Not_Found = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
