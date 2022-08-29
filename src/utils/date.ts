import { format } from 'date-fns';

export const formatDateToHourString = (date: Date): string => {
  const fmt = 'hh:mm';
  return format(date, fmt);
};
