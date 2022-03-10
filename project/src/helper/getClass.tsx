import {ActiveClasses} from '../types/classes';
import {ChildAndParentClassesHostelList} from '../types/classes';
import {classesOnPage} from '../constant';
import {classesOnHostelList} from '../constant';


export const getClass = (path: string):ActiveClasses => {
  switch (path) {
    case '/':
      return classesOnPage['/'];
    case '/favorites':
      return classesOnPage['/favorites'];
    case '/login' :
      return classesOnPage['/login'];
    default: return {activeClasses: 'page'};
  }
};

export const getClassOnHostelList = (path: string): ChildAndParentClassesHostelList => path === '/' ? classesOnHostelList.mainList : classesOnHostelList.offerList;

