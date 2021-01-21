// Converts string date into UTC format
// 20181123 => Fri Nov 23 2018 00:00:00 GMT+0000 (Greenwich Mean Time)
export const convertDate = (day: string): string => {
  const date = day.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  const convertedDate = new Date(date).toString();

  return convertedDate;
};

// Return day from UTC string
// Fri Nov 23 2018 00:00:00 GMT+0000 (Greenwich Mean Time) => Fri
export const getDay = (utcDay: string): string => {
  const words = utcDay.split(' ');
  const day = words[0];

  return day;
};

// Return date from UTC string
// Fri Nov 23 2018 00:00:00 GMT+0000 (Greenwich Mean Time) => Nov 23
export const getDate = (utcDay: string): string => {
  const words = utcDay.split(' ');
  const month = words[1];
  const day = words[2];

  return `${month} ${day}`;
};
