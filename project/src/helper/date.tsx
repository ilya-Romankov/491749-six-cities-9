import dayjs from 'dayjs';
import {FormatDate} from '../constant';
import {Comments} from '../types/comment';

export const getFormatDate = (date: Date): string =>  dayjs(date).format(FormatDate.CommentDate);

export const getDiffTime = (dateFrom: Comments, dateTo: Comments) => {
  const from = dayjs(dateFrom.date);
  const to  = dayjs(dateTo.date);

  return to.diff(from);
};

export const sortTimeComment = (firstComment: Comments, secondComment: Comments): number => {

  const firstTime = dayjs(firstComment.date);
  const secondTime = dayjs(secondComment.date);

  return secondTime.diff(firstTime);
};
