/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function sum(m, n) {
  if(m === null || n === null || m === undefined || n === undefined || 
  	m.isFinite() || n.isFinite() || String(m).trim() === '' || String(n).trim() === '') {
      throw new Error('Одно или оба слагаемых \u2013 не число(а)');
  }
  return Number(m) + Number(n);
}

