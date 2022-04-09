import {Link, useParams} from 'react-router-dom';
import {MouseEvent} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {AppRoute, AuthorizationStatus} from '../../constant';
import {useDispatch} from 'react-redux';
import { logoutAction} from '../../store/api-action';

function Header(): JSX.Element {
  const {authorizationStatus, emailUser} = useAppSelector(({USER}) => USER);
  const dispatch = useDispatch();
  const {id} = useParams();

  const handleLogout = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    if (id) {
      dispatch(logoutAction(Number(id)));
    }

    dispatch(logoutAction());
  };

  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to='/'>
              <img
                className="header__logo"
                src="img/logo.svg" alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth  ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{emailUser}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="/"
                    onClick={(evt) => handleLogout(evt)}
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
            :
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Sign_In}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
