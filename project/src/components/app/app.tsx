import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Layout from '../layout/layout';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import RoomScreen from '../room-screen/room-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';
import {Hostel} from '../../types/hostel';
import {AppRoute} from '../../constant';
import {useAppSelector} from '../../hooks/useAppSelector';
import LoadingScreen from '../loading-screen/loading-screen';

type AppProps = {
  hostels: Hostel[];
}

function App({hostels}:AppProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

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
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen hostel={hostels} />
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
