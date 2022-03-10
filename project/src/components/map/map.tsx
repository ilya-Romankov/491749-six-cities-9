import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {CityLeaflet} from '../../types/city';
import {Hostel} from '../../types/hostel';
import {getIcon} from '../../helper/getIcon';
import DefaultPin from './../../assets/pin.svg';
import ActivePin from './../../assets/pin-active.svg';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: CityLeaflet,
  hostels: Hostel[],
  activeHostel: Hostel | undefined;
};

const defaultCustomIcon = new Icon({...getIcon(DefaultPin)});

const currentCustomIcon = new Icon({...getIcon(ActivePin)});

function Map({city, hostels, activeHostel}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement |  null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      hostels.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activeHostel !== undefined && point.city.name === activeHostel.city.name
              ? currentCustomIcon
              : defaultCustomIcon,
          ).addTo(map);
      });
    }
  }, [map, hostels, activeHostel]);

  return (
    <section style={{width: '100%', height: '100%'}} ref={mapRef} className="cities__map map">

    </section>
  );
}

export default Map;
