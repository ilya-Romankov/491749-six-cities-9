import {User} from './user';

export type Comments = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: User;
}

export type SendComment = {
  comment: string,
  rating: string,
  id: string,
}
