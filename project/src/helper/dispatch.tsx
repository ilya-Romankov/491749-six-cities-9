import {SortKey} from '../constant';

export const currentSortHandleChange = (value: string) => {
  switch (value) {
    case SortKey.POPULAR:
      return SortKey.POPULAR;
    case SortKey.LOW:
      return SortKey.LOW;
    case SortKey.HIGH:
      return SortKey.HIGH;
    case SortKey.RARING:
      return SortKey.RARING;
  }
};
