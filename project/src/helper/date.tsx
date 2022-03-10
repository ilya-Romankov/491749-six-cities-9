import dayjs from 'dayjs';
import {FormatDate} from '../constant';

export const getFormatDate = (date: Date): string =>  dayjs(date).format(FormatDate.CommentDate);
