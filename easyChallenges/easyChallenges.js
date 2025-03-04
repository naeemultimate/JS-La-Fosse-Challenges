/* 
    JavaScript Easy Challenges

    ===========================================
*/

// - 10 Easy Challenges to complete on Replit (here)[https://replit.com/@la-fosse-academy/Easy-Challenges#index.js].

/* Challenge 1: Push Element into Array //DONE
---------------------------------------
Write a function that takes an array and an element as input and pushes the element into the array. */

function pushToArray(arr,element){
    arr.push(element);
    return arr;
}



// Example usage:
const myArray = [1, 2, 3];
console.log(pushToArray(myArray, 4)); // Output: [1, 2, 3, 4]
console.log(pushToArray(myArray,"dog")); //My test output: [1,2,3,dog]
  

/* Challenge 2: Filter Even Numbers //DONE
---------------------------------------
Write a function that takes an array of numbers and returns a new array containing only the even numbers from the original array.*/

function filterEvenNumbers(array){
    const evenNumbers = array.filter((num) => num % 2 === 0);
    return evenNumbers;
}


// Example :
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6]
  

/* Challenge 3: Count Words in a String //DONE
---------------------------------------
Write a function that takes a string and counts the number of words in it. Words are separated by spaces.*/

function countWords(str){
const trimmedStr = str.trim();
if (trimmedStr === "") {
    return 0;
}
const newArr = trimmedStr.split(" ");
const filteredArr = newArr.filter(word => word !== ""); // Filter out empty strings (caused by multiple spaces)
return filteredArr.length;
}



// Example

console.log(countWords('hello world')) // Output: 2
console.log(countWords('')) // Output: 0
console.log(countWords('this   is  a test')) //Output: 4

/* Challenge 4: Find the Smallest and Biggest Numbers //DONE
----------------------------------------------------
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(arr){
let min = arr[0];
let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }
}
    return [min, max];
}


// Example
console.log(minMax([1, 2, 8, 4, 5])) // Output: [1, 5]
console.log(minMax([2334454, 5])) // Output: [5, 2334454]
console.log(minMax([1])) // Output: [1, 1]

/* Challenge 5: Largest Swap //DONE
----------------------------------------------------
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
E.g If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
*/

function largestSwap(number){
    const strNumber = number.toString();
    const swapNum = parseInt(strNumber[1] + strNumber[0]); // parseInt Converts the numbers back from string to integers
    return number >= swapNum // if original number is greater than the swapped number then return it
}


console.log(largestSwap(14))// Output: false
console.log(largestSwap(53)) // Output: true
console.log(largestSwap(99)) // Output:true


/* Challenge 6: Reverse a String //DONE
----------------------------------------------------
Write a function that takes a string as input and returns the string in reverse order.
*/

function reverseString(word){
    let splitIntoArr = word.split(""); // Becomes [h,e,l,l,o]
    let reversedArr = splitIntoArr.reverse(); //reverses
    return reversedArr.join(""); //returns reversed array into string
}


// Example:
console.log(reverseString("hello")); // Output: "olleh"


/* Challenge 7: Sum of an Array //DONE
----------------------------------------------------
Write a function that takes an array of numbers and returns the sum of all the numbers.
*/

function sumArray(array){
    let sum = 0; //don't forget to start with 0 for the sum!!
    for(let i=0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}


// Example:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


/* Challenge 8: Find the Largest Numbers
----------------------------------------------------
Write a function that takes an array of numbers and returns the largest number in the array.
*/

function largestNumber(arr){
    let large = arr[0]; // start with first element as largest
    for (let i=1; i < arr.length; i++){
        if (arr[i] > large){ //if current iteration number is larger then set this to 'large' variable
            large = arr[i]; 
        }
    }
    return large;
}

 
// Example:
console.log(largestNumber([1, 5, 3, 9, 2])); //Output: 9


/* Challenge 9: Palindrome Checker
----------------------------------------------------
Write a function that checks if a given string is a palindrome (reads the same forward and backward).
*/
//I need to do a check with reversed array vs normal array but also turn it back to string
function isPalindrome(word){
    let strArr = word.split(""); // e.g. ['r','a','c','e','c','a','r']
    let reversedArr = strArr.reverse();
    let reversedStr = reversedArr.join("");
    return reversedStr === word;
}


// Example:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


/* Challenge 10: Counting Vowels //DONE
----------------------------------------------------
Write a function, vowelCount, that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
*/

function vowelCount(string){
    let arrStr = string.split(""); //spliting the string into an array
    let counter = 0;
    for (let i=0; i < arrStr.length; i++){
        if ( arrStr[i] === 'a' || arrStr[i] === 'e' || arrStr[i] === 'i' || arrStr[i] === 'o' ||arrStr[i] === 'u'|| arrStr[i] === 'A' || arrStr[i] === 'E' || arrStr[i] === 'I' || arrStr[i] === 'O' ||arrStr[i] === 'U'){
            counter = counter + 1;
        }
    }
    return counter;
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
