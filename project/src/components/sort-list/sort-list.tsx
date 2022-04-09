import {useState} from 'react';
import SortItem from '../sort-item/sort-item';
import {SortValue} from '../../constant';

function SortList(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openIsOpenHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => openIsOpenHandle()}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref={'#icon-arrow-select'}></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {Object.values(SortValue).map((item) => (
          <SortItem
            key={item.value}
            value={item.value}
            title={item.title}
          />))}
      </ul>
    </form>
  );
}

export default SortList;
