/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  if(Number.isInteger(n)) {
    if (n == 0) return result;
    if (n > 0) {
      for (let i = n; i > 0; i--) {
        result = result * i;
      }
      return result;
    } else throw new Error('Из переданного значения невозможно взять факториал (' + n + ' ∉ N)');
  } else throw new Error('Из переданного значения невозможно взять факториал (' + n + ' ∉ N)');
}
