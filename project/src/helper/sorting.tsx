import {Hostel} from '../types/hostel';
import {SortKey} from '../constant';
import {Comments} from '../types/comment';
import {sortTimeComment} from './date';

const sortForHigh = (firstHostel: Hostel, secondHostel: Hostel): number => {
  const firstPrice = firstHostel.price;
  const secondPrice = secondHostel.price;

  return firstPrice - secondPrice;
};

const sortForLow = (firstHostel: Hostel, secondHostel: Hostel): number => {
  const firstPrice = firstHostel.price;
  const secondPrice = secondHostel.price;

  return Math.sign(secondPrice - firstPrice );
};

const sortForRating = (firstHostel: Hostel, secondHostel: Hostel): number => {

  const firstRating = firstHostel.rating;
  const secondRating = secondHostel.rating;

  return Math.sign(secondRating - firstRating);
};

export const sortComments = (comments: Comments[]): Comments[] => [...comments].sort(sortTimeComment).slice(0, 10);


export const Sort = {
  [SortKey.HIGH]: sortForHigh,
  [SortKey.LOW]: sortForLow,
  [SortKey.RARING]: sortForRating,
};

