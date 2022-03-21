import {currentSort} from '../../store/action';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SortKey} from '../../constant';

type SortItemProps = {
  title: string,
  value: string,
}

function SortItem({title, value}: SortItemProps): JSX.Element {
  const currentSortPage = useAppSelector((state)=> state.currentSort);
  const dispatch = useAppDispatch();

  const currentSortHandleChange = () => {
    switch (value) {
      case 'POPULAR':
        return dispatch(currentSort(SortKey.POPULAR));
      case 'LOW':
        return dispatch(currentSort(SortKey.LOW));
      case 'HIGH':
        return dispatch(currentSort(SortKey.HIGH));
      case 'RATING':
        return dispatch(currentSort(SortKey.RARING));
    }
  };

  return (
    <li
      className={`places__option ${currentSortPage === value ? 'places__option--active': ''}`}
      tabIndex={0}
      onClick={() => currentSortHandleChange()}
    >
      {title}
    </li>
  );
}

export default SortItem;

//places__option--active
