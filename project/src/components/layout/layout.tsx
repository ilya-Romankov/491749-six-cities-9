import {Outlet} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

function Layout(): JSX.Element {
  return (
    <div className="page page--main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
