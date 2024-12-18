/* 
    JavaScript Easy Challenges

    ===========================================
*/

// - 10 Easy Challenges to complete on Replit (here)[https://replit.com/@la-fosse-academy/Easy-Challenges#index.js].

/* Challenge 1: Push Element into Array
---------------------------------------
Write a function that takes an array and an element as input and pushes the element into the array. */

function pushToArray(){

}



// Example usage:
const myArray = [1, 2, 3];
console.log(pushToArray(myArray, 4)); // Output: [1, 2, 3, 4]
  

/* Challenge 2: Filter Even Numbers
---------------------------------------
Write a function that takes an array of numbers and returns a new array containing only the even numbers from the original array.*/

function filterEvenNumbers(){

}


// Example :
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6]
  

/* Challenge 3: Count Words in a String
---------------------------------------
Write a function that takes a string and counts the number of words in it. Words are separated by spaces.*/

function countWords(){

}



// Example

console.log(countWords('hello world')) // Output: 2
console.log(countWords('')) // Output: 0
console.log(countWords('this   is  a test')) //Output: 4

/* Challenge 4: Find the Smallest and Biggest Numbers
----------------------------------------------------
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(){

}


// Example
console.log(minMax([1, 2, 8, 4, 5])) // Output: [1, 5]
console.log(minMax([2334454, 5])) // Output: [5, 2334454]
console.log(minMax([1])) // Output: [1, 1]

/* Challenge 5: Largest Swap
----------------------------------------------------
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
E.g If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
*/

function largestSwap(){

}


console.log(largestSwap(14))// Output: false
console.log(largestSwap(53)) // Output: true
console.log(largestSwap(99)) // Output:true


/* Challenge 6: Reverse a String
----------------------------------------------------
Write a function that takes a string as input and returns the string in reverse order.
*/

function reverseString(){

}


// Example:
console.log(reverseString("hello")); // Output: "olleh"


/* Challenge 7: Sum of an Array
----------------------------------------------------
Write a function that takes an array of numbers and returns the sum of all the numbers.
*/

function sumArray(){

}


// Example:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


/* Challenge 8: Find the Largest Numbers
----------------------------------------------------
Write a function that takes an array of numbers and returns the largest number in the array.
*/

function largestNumber(){

}

 
// Example:
console.log(largestNumber([1, 5, 3, 9, 2])); //Output: 9


/* Challenge 9: Palindrome Checker
----------------------------------------------------
Write a function that checks if a given string is a palindrome (reads the same forward and backward).
*/

function isPalindrome(){

}


// Example:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


/* Challenge 10: Counting Vowels
----------------------------------------------------
Write a function, vowelCount, that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
*/

function vowelCount(){

}


// Example
console.log(vowelCount("lafosseacademy")) //Output: 6
console.log(vowelCount("HElloworld")) //Output: 3

module.exports = {
    pushToArray,
    filterEvenNumbers,
    countWords,
    minMax,
    largestSwap,
    reverseString,
    sumArray,
    largestNumber,
    vowelCount,
    isPalindrome,
 }
