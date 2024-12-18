const  { pushToArray, countWords, filterEvenNumbers, minMax, largestSwap, reverseString, largestNumber, vowelCount } = require('../easyChallenges/easyChallenges.js')

describe('pushToArray', () => {
  test('adds an element to an array', () => {
    const arr = [1, 2, 3];
    const result = pushToArray(arr, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('adds a string to an array of numbers', () => {
    const arr = [1, 2, 3];
    const result = pushToArray(arr, 'hello');
    expect(result).toEqual([1, 2, 3, 'hello']);
  });

  test('adds a number to an array of strings', () => {
    const arr = ['a', 'b', 'c'];
    const result = pushToArray(arr, 1);
    expect(result).toEqual(['a', 'b', 'c', 1]);
  });

  test('handles pushing undefined', () => {
    const arr = [1, 2, 3];
    const result = pushToArray(arr, undefined);
    expect(result).toEqual([1, 2, 3, undefined]);
  });

  test('returns the array when pushing null', () => {
    const arr = [1, 2, 3];
    const result = pushToArray(arr, null);
    expect(result).toEqual([1, 2, 3, null]);
  });
});


describe('countWords', () => {
  test('counts the number of words in a string', () => {
    expect(countWords('hello world')).toBe(2);
  });

  test('returns 0 for an empty string', () => {
    expect(countWords('')).toBe(0);
  });

  test('counts words separated by multiple spaces', () => {
    expect(countWords('this   is  a test')).toBe(4);
  });

  test('ignores extra spaces at the start and end', () => {
    expect(countWords('   leading and trailing  ')).toBe(3);
  });

  test('returns 1 for a single word', () => {
    expect(countWords('hello')).toBe(1);
  });
});


describe('filterEvenNumbers', () => {
  test('returns an array of even numbers from the input array', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test('returns an empty array if no even numbers are present', () => {
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  test('returns an empty array for an empty input array', () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });

  test('handles an array with all even numbers', () => {
    expect(filterEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  test('handles an array with negative numbers', () => {
    expect(filterEvenNumbers([-2, -1, 0, 1])).toEqual([-2, 0]);
  });
});


test('return smallest and biggest number in array', () => {
    expect(minMax([1, 4, 6, 2])).toEqual([1, 6])
})

test('check if first number is bigger than second number', () => {
    expect(largestSwap(27)).toBe(false)
    expect(largestSwap(99)).toBe(true)
    expect(largestSwap(53)).toBe(true)
})

test('reverses a given string', () => {
    expect(reverseString("hello")).toBe("olleh");         // Normal string
    expect(reverseString("world")).toBe("dlrow");         // Normal string
    expect(reverseString("")).toBe("");                    // Empty string
    expect(reverseString("a")).toBe("a");                  // Single character
    expect(reverseString("abc123")).toBe("321cba");       // Alphanumeric string
  });

test('returns the largest number in the array', () => {
  expect(largestNumber([1, 5, 3, 9, 2])).toBe(9);          // Regular numbers
  expect(largestNumber([-1, -5, -3, -9, -2])).toBe(-1);    // Negative numbers
  expect(largestNumber([100, 99, 98, 97, 96])).toBe(100);  // Large numbers
  expect(largestNumber([0])).toBe(0);                       // Single element
});

describe('countVowels', () => {
  test('returns the count of vowels in a given string', () => {
    expect(vowelCount('hello')).toBe(2);
  });

  test('returns the count of vowels in a mixed case string', () => {
    expect(vowelCount('HeLLo')).toBe(2);
  });

  test('returns 0 for a string with no vowels', () => {
    expect(vowelCount('rhythm')).toBe(0);
  });

  test('returns the correct count for an empty string', () => {
    expect(vowelCount('')).toBe(0);
  });

  test('counts all vowels including special characters', () => {
    expect(vowelCount('a!e@i#o$u%')).toBe(5);
  });
});