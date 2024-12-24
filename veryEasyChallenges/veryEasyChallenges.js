/* 
    JavaScript Very Easy Challenges to get you started with basic concepts like variables, arithmetic, and simple functions
    ===========================================
*/


// - 10 Very Easy Challenges to complete on Replit (here)[https://replit.com/@la-fosse-academy/Very-Easy-Challenges]. 


/* Challenge 1: Print "Hello, World"
-----------------------------------
Write a function that prints "Hello, World!" to the console.*/

function sayHello(){
    return console.log("Hello, World!"); //Prints 
}


// Example 
sayHello(); 
// Output: Hello, World! 


/* Challenge 2: Add Two Numbers 
-------------------------------
Write a function, addNumbers, that takes two numbers and returns their sum. */


function addNumbers(a, b){
    return a + b;
}


// Example
console.log(addNumbers(2, 3))
// Output: 5

/* Challenge 3: Check if Number is Positive 
------------------------------------------
Write a function, isPositive, that checks if a given number is positive or not. */

function isPositive(num){
    return num > 0;
}



// Example 
console.log(isPositive(5));
// Output: true 
console.log(isPositive(-3));
//Output: false


/* Challenge 4: Multiply Two Numbers
-----------------------------------
Write a function, multiple, that multiplies two numbers and returns the result.*/

function multiply(a,b){
    return a * b;
}


//Example
console.log(multiply(4, 3));
//Output: 12


/* Challenge 5: Convert Minutes to Seconds
-----------------------------------------
Write a function, minutesToSeconds, that converts a given number of minutes into seconds. */

function minutesToSeconds(num){
    return num * 60;
}



//Example
console.log(minutesToSeconds(5)); // Checks out
//Output: 300


/* Challenge 6: Sum or Equal to 100 
-----------------------------------
/* Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
*/

function sumOrEqualto100(num1,num2){
    if(num1 === 100 || num2 === 100 ||(num1+num2) === 100 ){
        return true;
    } else {
        return false;
    }
}



//Example
console.log(sumOrEqualto100(50, 50)) //Output: True 
console.log(sumOrEqualto100(100, 10)) //Output: True
console.log(sumOrEqualto100(65, 75)) //Output: False


/* Challenge 7: Return "Hello"
-----------------------------
Write a function that returns the string "hello" joined with a space " " and the given argument a.
*/

function returnHello(a){
    return "Hello" + ' ' + a;
}


// Example
console.log(returnHello("Peter, how are you?")) //Output: "Hello Peter, how are you?"
console.log(returnHello("Ria")) //Output: "Hello Ria"


/* Challenge 8: Return the Last Element in an Array
--------------
Create a function that accepts an array and returns the last item in the array.
*/

function getLastItem(array){
    let lastItem = array.pop();
    return lastItem;
}



// Example
console.log(getLastItem([1, 2, 3])) //Output: 3
console.log(getLastItem(["cat", "dog", "duck"])) //Output: "duck"
console.log(getLastItem([true, false, true])) //Output: true



/* Challenge 9:
--------------
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.
*/

function calculateFuel(distance){
    if (distance < 10){
        return 100;
    } else{
        return distance * 10;
    }
    
}



// Example
 console.log(calculateFuel(15)) // Output: 150

console.log(calculateFuel(23.5)) // Output: 235

console.log(calculateFuel(3)) // Output: 100


/* Challenge 10:
--------------
A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.*/

function shouldServeDrinks(age,onBreak){
    if(age > 17 && onBreak === false){
        return true;
    } else {
        return false;
    }
}
    


// Example
console.log(shouldServeDrinks(17, true)) // Output: false

console.log(shouldServeDrinks(19, false)) // Output: true

console.log(shouldServeDrinks(30, true)) // Output: false


/* Congratulations on completing these exercises. Now move on to the Easy Challenges folder. */

module.exports = { 
    sayHello,
    addNumbers,
    isPositive,
    multiply,
    sumOrEqualto100, 
    minutesToSeconds,
    returnHello,
    calculateFuel,
    shouldServeDrinks,
    getLastItem
}

//COMPLETED veryEasyChallenges