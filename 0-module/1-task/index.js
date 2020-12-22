/**
 * sum
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function sum(m, n) {
  m_temp = parseFloat(m);
  n_temp = parseFloat(n);
  
  if( isFinite(m_temp) && isFinite(n_temp) ) {
      return m_temp + n_temp;
  }
  throw new Error('Одно или оба слагаемых не является конечным числом');
}
