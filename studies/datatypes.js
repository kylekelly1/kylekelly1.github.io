/**
 * NUMBERS:
 * 0.   JS only has one type of numbers:
 */
// Example:
var x = 20;
var y = 30;
var z = 40;

/**
 * STRINGS:
 * 0.   Strings in Js are a series of characters. All strings must be written with 
 *      a single or double quotes. You can also use quotes inside the string as long
 *      as they don't match the quotes surrounding the string.
 * 
 * 1.   You can obtain the length of any string by using the built in property .length.
 */
var myName = 'Kyle';
var string = 'This is a string';

myName.length; // ---> output is 4

/**
 * BOOLEANS:
 * 0.   Booleans represent one of two values which would be true or false. To receive
 *      a boolean value we would use comparison operators.
 * 1.   If the value is 0, -0, null, false, NaN, undefined, or an empty string, the object
 *      has an initial value of false.
 */

(10 > 9); //---> true
(10 < 9); //---> false

var x = 0; //boolean value is false 

/**
 * ARRAYS:
 * 0.   Arrays are a storage container in JS. It allows us to store multiple values
 *      in a single variable. Instead of creating multiple variables for every value
 *      we simply just create an array. Arrays allow us to loop through and access
 *      every piece of informationt that we need, stored as an index number. We create
 *      arrays by using open and closed brackets []. We access arrays through dot notation as well. 
 * 1.   Every element inside of an array must be seperated by a comma.
 */
var people = ['kyle', 'richard', 'sandy', 'maddy', 3, true, console.log];

//If I wanted to access the last element in my array i can use the built in syntax of
//people.length - 1

//If I wanted to know how many elements are inside my array I could use the .length prop.

