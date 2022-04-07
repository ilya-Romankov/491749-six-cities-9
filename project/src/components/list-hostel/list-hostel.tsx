import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import HostelCard from '../hostel-card/hostel-card';
import {Hostel} from '../../types/hostel';
import {ChildAndParentClassesHostelList} from '../../types/classes';
import {getClassOnHostelList} from '../../helper/getClass';
import {Sort} from '../../helper/sorting';
import {classesOnHostelList, SortKey} from '../../constant';
import {useAppSelector} from '../../hooks/useAppSelector';

type ListHostelProps = {
  hostels: Hostel[]
  getActiveCard: (hostel: Hostel) => void;
}

function ListHostel({hostels, getActiveCard}: ListHostelProps): JSX.Element {
  const currentSortPage = useAppSelector(({CITY})=> CITY.currentSort);
  const [sortHostels, setSortHostels] = useState<Hostel[]>([...hostels].sort(Sort[currentSortPage]));
  const {pathname} = useLocation();
  const [activeClasses, setActiveClasses] = useState<ChildAndParentClassesHostelList>(classesOnHostelList.mainList);

  useEffect(() => {
    setActiveClasses(getClassOnHostelList(pathname));
  }, [pathname]);

  useEffect(() => {
    if (currentSortPage === SortKey.POPULAR) {
      setSortHostels(hostels);
    }

    setSortHostels([...hostels].sort(Sort[currentSortPage]));
  }, [currentSortPage, hostels]);

  const {parentElement, childElement} = activeClasses;

  return (
    <div className={`${parentElement}`}>
      {sortHostels.map((hostel) => (
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
