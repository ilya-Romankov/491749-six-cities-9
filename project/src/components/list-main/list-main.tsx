import HostelCard from '../hostel-card/hostel-card';
import {Hostel} from '../../types/hostel';

type ListOfferProps = {
  hostels: Hostel[]
  getActiveCard: (hostel: Hostel) => void;
}

function ListMain({hostels, getActiveCard}: ListOfferProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {hostels.map((hostel) => (
        <HostelCard
          getActiveCard={() => getActiveCard(hostel)}
          hostel={hostel}
          key={hostel.id}
        />
      ))}
    </div>
  );
}

export default ListMain;
