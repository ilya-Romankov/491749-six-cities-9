import {Hostel} from '../types/hostel';

export const offers: Hostel[] = [
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of New-York.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'http://picsum.photos/300/200?r=600',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'http://picsum.photos/300/200?r=200',
      'http://picsum.photos/300/200?r=205',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 22.35514938496378,
      longitude: 8.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/300/200?r=300',
    price: 142,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Roma.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'http://picsum.photos/300/200?r=202',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: [
      'http://picsum.photos/300/200?r=209',
      'http://picsum.photos/300/200?r=223',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 22.35514938496378,
      longitude: 8.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'http://picsum.photos/300/200?r=303',
    price: 176,
    rating: 2.8,
    title: 'Very good hostel !',
    type: 'single house',
  },
];
