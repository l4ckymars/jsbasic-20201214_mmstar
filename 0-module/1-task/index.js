/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function sum(m, n) {
  m = String(m).replace(/ /g, '');
  n = String(n).replace(/ /g, '');
  if(Number.isFinite(m) || Number.isFinite(n)) {
      throw new Error('Одно или оба слагаемых \u2013 не число(а)');
  }
  return Number(m) + Number(n);
}
