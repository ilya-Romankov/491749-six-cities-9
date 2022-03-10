import {AppRoute} from '../constant';

export type ActiveClasses = {
  activeClasses: string,
}

export type ClassesOnPage = {
  [AppRoute.Main]: ActiveClasses,
  [AppRoute.Sign_In]: ActiveClasses,
  [AppRoute.Favorites]: ActiveClasses,
}

export type ChildAndParentClassesHostelList =  {
  parentElement: string,
  childElement: string,
}

export type ClassesOnHostelList = {
  mainList: ChildAndParentClassesHostelList,
  offerList: ChildAndParentClassesHostelList,
}
