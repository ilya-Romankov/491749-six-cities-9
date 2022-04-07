import {store} from '../../store';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {
  ADD_FAVORITE_PARAMETER,
  AppRoute,
  AuthorizationStatus,
  DELETE_FAVORITE_PARAMETER
} from '../../constant';
import {editStatusHostelsAction, fetchCurrentHostelAction} from '../../store/api-action';

type AddFavoriteProps = {
  isFavorite: boolean;
  id: number,
}

function AddFavorite({isFavorite, id}: AddFavoriteProps): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const navigate = useNavigate();

  const status: number = isFavorite? DELETE_FAVORITE_PARAMETER : ADD_FAVORITE_PARAMETER;

  const addFavoriteClickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(editStatusHostelsAction({id, status}));
      store.dispatch(fetchCurrentHostelAction(id));
      return;
    }

    return navigate(AppRoute.Sign_In);
  };

  return (
    <button
      className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`}
      type="button"
      onClick={addFavoriteClickHandler}
    >
      <svg className='property__bookmark-icon' width='31' height='33'>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default AddFavorite;
