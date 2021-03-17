
///Strings
//First, declare variable named firstName.
var firstName;
//Assign firstName to a string value of your first name.
firstName = 'Sasuke'
//Declare another variable named lastName and assign it the value of your last name.
var lastName= 'Uzimaki'
//Then declare another variable named fullName and assign it to the current value of firstName and lastName and have the joined values separated with a space character.
var fullName = firstName + ' ' + lastName
console.log(fullName)
//Remember that computer languages will not add the space character for you so how would you do that manually?








//Numbers
//Declare a variable named luckyNumber.
var luckyNumber
//Assign luckyNumber to a number of your choice.
var luckyNukber = 10
//Declare another variable named luckyNumberTimes2 and assign it the value of luckyNumber multiplied by 2.
var luckyNumberTimes2 = luckyNumber * 2;










//Booleans
//Declare a variable named myBool and assign it the value of true.
var myBool = true

//Then, declare another named isEqualTo and assign it the value of strictly comparing luckyNumber and luckyNumberTimes2.
var isEqualTo = luckyNumber === luckyNumberTimes2




/* 
1. Create a function factorial that when given a 
number, returns the factorial of it. The factorial
 of a number is the product of an integer and the 
 integers below it.


What are factorials? 
https://en.wikipedia.org/wiki/Factorial

For example:
factorial(1); // => 1     (1)
factorial(2); // => 2     (2 * 1)
factorial(3); // => 6     (3 * 2 * 1)
factorial(4); // => 24    (4 * 3 * 2 * 1)
factorial(8); // => 40320 (8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)



  */

function factorial(number){
//CODE BELOW HERE
var answer = 1;

for(var i = number; i >= 1; i--){

  answer = answer * i;

  console.log(answer)
}

//CODE ABOVE HERE
}

factorial(10)




/*
2. Create a function reverseString that takes in a string
 and returns the reversed version.

Example: 
reverseString('Hello, World!'); // => '!dlroW ,olleH'

*/

function reverseString(string){
  //CODE BELOW HERE
  reverseString = ('Naruto Drip Sauce, No Cap') 
 return ('paC oN, ecuaS pirD oturaN)
 
 console log(return)
  //CODE ABOVE HERE
}





/*
3. Create a function that takes an input array and 
add all numbers in the array.

Example: 
var myArray = [1,2,3,4,5]

arraySum(myArray) => 15
*/
function arraySubtract(array){
  var myArray = [1,2,3,4,5,6,7,8] 
    arraySubtract(myArray) => -34
    
    console.log(arraySubtract)
}