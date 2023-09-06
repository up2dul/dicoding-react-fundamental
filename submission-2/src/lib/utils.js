/**
 * Formats a given date into a string representation.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-EN', options);
}

export { formatDate };
