import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {getActiveClass} from '../../helper/getActiveClass';
import Header from '../header/header';
import Footer from '../footer/footer';


function Layout(): JSX.Element {
  const path = useLocation();
  const [activeClasses, setActiveClasses] = useState(getActiveClass(path.pathname));

  useEffect(() => setActiveClasses(getActiveClass(path.pathname)), [path]);

  return (
    <div className={activeClasses.mainPage}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
