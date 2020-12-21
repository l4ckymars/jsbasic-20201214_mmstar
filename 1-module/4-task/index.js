/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lower_str = str.toLowerCase();
  if ( lower_str.includes('1xbet') || lower_str.includes('xxx') ) return true;
  return false
}
