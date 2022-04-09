import {store} from '../../store';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {
  ADD_FAVORITE_PARAMETER,
  AppRoute,
  AuthorizationStatus,
  DELETE_FAVORITE_PARAMETER
} from '../../constant';
import {editStatusHostelsAction, fetchFavoriteHostelsAction, fetchNearbyHostelsAction} from '../../store/api-action';

type AddFavoriteProps = {
  isFavorite: boolean;
  id: number,
}

function AddFavorite({isFavorite, id}: AddFavoriteProps): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const navigate = useNavigate();
  const currentParams = useParams();

  const status: number = isFavorite? DELETE_FAVORITE_PARAMETER : ADD_FAVORITE_PARAMETER;

  const handleAddFavoriteClick = () => {

    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(editStatusHostelsAction({id, status}));

      if (currentParams.id) {
        store.dispatch(fetchNearbyHostelsAction(Number(currentParams.id)));
      }

      store.dispatch(fetchFavoriteHostelsAction());
      return;
    }

    return navigate(AppRoute.Sign_In);
  };

  return (
    <button
      className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
      onClick={handleAddFavoriteClick}
    >
      <svg className='place-card__bookmark-icon' width='19' height='18'>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default AddFavorite;
