import {SortKey} from "../constant";

export const currentSortHandleChange = (value: string) => {
  switch (value) {
    case 'POPULAR':
      return SortKey.POPULAR;
    case 'LOW':
      return SortKey.LOW;
    case 'HIGH':
      return SortKey.HIGH;
    case 'RATING':
      return SortKey.RARING;
  };
};
