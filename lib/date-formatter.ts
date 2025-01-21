import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getDateWithTime = (date: string) => {
  const time = dayjs(date);
  const today = dayjs();
  if (time.isSame(today, 'day')) {
    return time.fromNow();
  }
  return time.format('D MMM YYYY, h:mm A');
};
