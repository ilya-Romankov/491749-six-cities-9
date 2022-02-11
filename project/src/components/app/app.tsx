import MainScreen from '../main-screen/main-screen';
import {HOSTEL_COUNT} from '../../constant';

function App(): JSX.Element {
  return (
    <MainScreen offersCount={HOSTEL_COUNT} />
  );
}

export default App;
