const { sayHello, addNumbers, isPositive, multiply, minutesToSeconds, sumOrEqualto100, returnHello, calculateFuel, shouldServeDrinks, getLastItem } = require('../veryEasyChallenges/veryEasyChallenges');

test('prints "Hello, World!"', () => {
  console.log = jest.fn(); // Mock console.log
  sayHello();
  expect(console.log).toHaveBeenCalledWith("Hello, World!");
});


test('properly adds two numbers', () => {
  expect(addNumbers(1, 2)).toBe(3)
})

test('checks if number is positive', () => {
  expect(isPositive(5)).toBe(true);
  expect(isPositive(-3)).toBe(false);
  expect(isPositive(0)).toBe(false);
});

test('multiplies two numbers correctly', () => {
  expect(multiply(4, 3)).toBe(12);
  expect(multiply(-2, 3)).toBe(-6);
  expect(multiply(0, 10)).toBe(0);
});

test('converts minutes to seconds', () => {
  expect(minutesToSeconds(5)).toBe(300);
  expect(minutesToSeconds(1)).toBe(60);
  expect(minutesToSeconds(0)).toBe(0);
});

test('checks if number is 100 or both numbers equal to 100', () => {
  expect(sumOrEqualto100(50, 50)).toBe(true)
  expect(sumOrEqualto100(100, 10)).toBe(true)
  expect(sumOrEqualto100(10, 100)).toBe(true)
  expect(sumOrEqualto100(65, 75)).toBe(false)
  expect(sumOrEqualto100(4, 44)).toBe(false)
})

test('add Hello before the string argument ', () => {
  expect(returnHello("Peter")).toEqual(expect.stringContaining("Hello"));
})

test('returns "hello" joined with the argument and a space', () => {
  expect(returnHello("world")).toBe("Hello world");
  expect(returnHello("there")).toBe("Hello there");
  expect(returnHello("JavaScript")).toBe("Hello JavaScript");
})


test('multiple distance by 100 if greater than 10 or return 100 ', () => {
  expect(calculateFuel(15)).toBe(150)
  expect(calculateFuel(3)).toBe(100)
})

test('checks if number is over 18 or true ', () => {
  expect(shouldServeDrinks(17, true)).toBe(false)
  expect(shouldServeDrinks(19, false)).toBe(true)
  expect(shouldServeDrinks(30, true)).toBe(false)
})

test('return last element in an array ', () => {
  expect(getLastItem(['cat', 'dog', 'duck'])).toBe('duck')
  expect(getLastItem([1, 2, 3])).toBe(3)
})