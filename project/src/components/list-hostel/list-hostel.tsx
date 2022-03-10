import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import HostelCard from '../hostel-card/hostel-card';
import {Hostel} from '../../types/hostel';
import {ChildAndParentClassesHostelList} from '../../types/classes';
import {getClassOnHostelList} from '../../helper/getClass';
import {classesOnHostelList} from '../../constant';

type ListOfferProps = {
  hostels: Hostel[]
  getActiveCard: (hostel: Hostel) => void;
}

function ListHostel({hostels, getActiveCard}: ListOfferProps): JSX.Element {
  const currentPath = useLocation().pathname;
  const [activeClasses, setActiveClasses] = useState<ChildAndParentClassesHostelList>(classesOnHostelList.mainList);

  useEffect(() => {
    setActiveClasses(getClassOnHostelList(currentPath));
  }, [currentPath]);

  const {parentElement, childElement} = activeClasses;

  return (
    <div className={`${parentElement}`}>
      {hostels.map((hostel) => (
        <HostelCard
          getActiveCard={() => getActiveCard(hostel)}
          hostel={hostel}
          key={hostel.id}
          classes={childElement}
        />
      ))}
    </div>
  );
}

export default ListHostel;
