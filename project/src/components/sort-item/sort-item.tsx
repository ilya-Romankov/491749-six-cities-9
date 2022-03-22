import {useAppSelector} from '../../hooks/useAppSelector';
import {currentSortHandleChange} from '../../helper/dispatch';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {currentSort} from '../../store/action';

type SortItemProps = {
  title: string,
  value: string,
}

function SortItem({title, value}: SortItemProps): JSX.Element {
  const currentSortPage = useAppSelector((state)=> state.currentSort);
  const dispatch = useAppDispatch();

  return (
    <li
      className={`places__option ${currentSortPage === value ? 'places__option--active': ''}`}
      tabIndex={0}
      onClick={() => dispatch(currentSort(currentSortHandleChange(value)))}
    >
      {title}
    </li>
  );
}

export default SortItem;
