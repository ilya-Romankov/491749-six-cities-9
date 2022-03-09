import {BaseIconOptions} from 'leaflet';

export const getIcon = (urlPin: string): BaseIconOptions => ({
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  iconUrl: urlPin,
});
