/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  if(!numbers.length) return numbers
  numbers.sort((a, b) => a - b)
  const min = numbers[0]
  const max = numbers[numbers.length - 1]
  return [min, max]
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length === 0) return [];
  let [min, max] = [numbers[0], numbers[0]];
  for (const num of numbers) {
    [min, max] = [Math.min(min, num), Math.max(max, num)];
  }
  return [min, max];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
