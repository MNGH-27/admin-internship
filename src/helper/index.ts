export function fixDateFormat(_date: Date | null) {
  //check if _date = null return null
  if (!_date) return null;

  const newDate = new Date(_date);

  const year = newDate.getFullYear(); // get year
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2); // get month, add leading zero if needed
  const day = ("0" + newDate.getDate()).slice(-2); // get day, add leading zero if needed

  return `${year}/${month}/${day}`; // concatenate year, month, and day with forward slashes
}
