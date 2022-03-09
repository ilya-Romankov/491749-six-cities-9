import {ActiveClasses} from '../types/classes';
import {classesOnPage} from '../constant';

export function getActiveClass(path: string):ActiveClasses {
  switch (path) {
    case '/':
      return classesOnPage['/'];
    case '/favorites':
      return classesOnPage['/favorites'];
    case '/login' :
      return classesOnPage['/login'];
    default: return {mainPage: 'page'};
  }
}
