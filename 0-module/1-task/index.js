/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function sum(m, n) {
  m = String(m).replace(/ /g, '');
  m = Number(m);
  n = String(n).replace(/ /g, '');
  n = Number(n);
  if(isFinite(m) && isFinite(n)) {
      return m + n;
  }
  throw new Error('Одно или оба слагаемых не является конечным числом');
}
