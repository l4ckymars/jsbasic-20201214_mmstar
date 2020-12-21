/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let diff = str.length - maxlength;
  if (diff > 0) {
    let new_str = str.slice(0, -diff - 1);
    new_str = new_str + '…'

    return new_str;
  }
  return str;
}
