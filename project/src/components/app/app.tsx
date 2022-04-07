import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import Layout from '../layout/layout';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import RoomScreen from '../room-screen/room-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../constant';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRouteLogin from '../provate-route-login/private-route-login';

function App(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {isDataLoaded} = useAppSelector(({DATA}) => DATA);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout />}
        >
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Sign_In}
            element={
              <PrivateRouteLogin authorizationStatus={authorizationStatus}>
                <LoginScreen />
              </PrivateRouteLogin>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<RoomScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Not_Found}
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
