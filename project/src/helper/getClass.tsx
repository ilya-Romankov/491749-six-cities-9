import {ActiveClasses} from '../types/classes';
import {ChildAndParentClassesHostelList} from '../types/classes';
import {classesOnPage} from '../constant';
import {classesOnHostelList} from '../constant';
import {AppRoute} from '../constant';


export const getClass = (path: string):ActiveClasses => {
  switch (path) {
    case AppRoute.Main:
      return classesOnPage[AppRoute.Main];
    case AppRoute.Favorites:
      return classesOnPage[AppRoute.Favorites];
    case AppRoute.Sign_In :
      return classesOnPage[AppRoute.Sign_In];
    default: return {activeClasses: 'page'};
  }
};

export const getClassOnHostelList = (path: string): ChildAndParentClassesHostelList => path === '/' ? classesOnHostelList.mainList : classesOnHostelList.offerList;

