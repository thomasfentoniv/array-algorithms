/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  let current = 1;
  let missing = 0;
  while (missing === 0) {
    if (numbers.includes(current)) {
      current++;
    } else {
      missing = current;
    }
  }
  return missing;
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  const n = numbers.length + 1
  const expected = (n * (n + 1)) / 2
  const actual = numbers.reduce((total, number)=> total + number, 0)
  return expected - actual 
}

module.exports = { missingNumberBruteForce, missingNumberSum };
