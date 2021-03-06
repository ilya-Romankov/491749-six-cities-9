import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {getClass} from '../../helper/getClass';
import {classesOnPage} from '../../constant';
import {ActiveClasses} from '../../types/classes';
import Header from '../header/header';
import Footer from '../footer/footer';


function Layout(): JSX.Element {
  const path = useLocation();
  const [activeClasses, setActiveClasses] = useState<ActiveClasses>(classesOnPage['/']);

  useEffect(() => setActiveClasses(getClass(path.pathname)), [path]);

  return (
    <div className={activeClasses.activeClasses}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
