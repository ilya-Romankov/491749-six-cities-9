import {Comments} from '../types/comment';

export const comments: Comments[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date(),
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'http://picsum.photos/300/200?r=690',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date(),
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'http://picsum.photos/300/200?r=790',
      id: 2,
      isPro: true,
      name: 'Ilya Romankov',
    },
  },
];
