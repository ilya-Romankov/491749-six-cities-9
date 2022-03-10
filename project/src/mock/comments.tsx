import {Comments} from '../types/comment';

export const comments: Comments[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date(),
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'http://picsum.photos/300/200?r=620',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    },
  },
  {
    comment: 'Самый крутой отель!',
    date: new Date(),
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'http://picsum.photos/300/200?r=290',
      id: 2,
      isPro: true,
      name: 'Ilya Romankov',
    },
  },
];
