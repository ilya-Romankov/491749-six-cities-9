import HostelCard from '../hostel-card/hostel-card';
import {Hostel} from '../../types/hostel';
import {useState} from 'react';

type ListOfferProps = {
  hostels: Hostel[]
}

function ListMain({hostels}: ListOfferProps): JSX.Element {
  const [,setActiveCard] = useState<number | undefined>(undefined);

  return (
    <div className="cities__places-list places__list tabs__content">
      {hostels.map((hostel) => <HostelCard getActiveCard={() => setActiveCard(hostel.id)} hostel={hostel} key={hostel.id} />)}
    </div>
  );
}

export default ListMain;
