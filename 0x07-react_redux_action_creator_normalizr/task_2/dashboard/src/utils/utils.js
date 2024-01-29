export const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School' : 'Holberton School main dashboard';

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};
