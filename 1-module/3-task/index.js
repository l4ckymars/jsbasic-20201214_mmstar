/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(str == null || str == undefined || str == '') return str;
  return str[0].toUpperCase() + str.slice(1);
}
