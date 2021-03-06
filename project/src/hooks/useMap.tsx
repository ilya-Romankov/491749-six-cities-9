import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityLeaflet} from '../types/city';
import {LINK_FOR_LEAFLET} from '../constant';
import {useLocation} from 'react-router-dom';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityLeaflet): Map | null {
  const {pathname} = useLocation();
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map !== null) {
      map.panTo([city.latitude, city.longitude]);
      map.setView({
        lat: city.latitude,
        lng: city.longitude,
      });
      map.setZoom(city.zoom);
    }

    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: LINK_FOR_LEAFLET,
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }

  }, [mapRef, map, city, pathname]);

  return map;
}

export default useMap;
