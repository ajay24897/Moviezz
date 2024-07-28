export function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) {
    return '';
  }

  const day = date.getDate();
  const month = date.toLocaleString('default', {month: 'short'});
  const year = date.getFullYear().toString().slice(-2);

  const ordinalSuffix = getOrdinalSuffix(day);

  return `${day}${ordinalSuffix} ${month} ${year}`;
}

export function capitalizeFirstLetterOfEachWord(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
