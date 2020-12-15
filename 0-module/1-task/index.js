/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function sum(m, n) {
  if(m === null || n === null || m === undefined || n === undefined || 
  	isNaN(m) || isNaN(n) || m.trim() === '' || n.trim() === '') {
    return 'Одно или оба слагаемых \u2013 не число(а)';
  }
  return +m + +n;
}
