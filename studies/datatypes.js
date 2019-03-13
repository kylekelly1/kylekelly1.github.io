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

/**
 * 2.   There are also important methods to manipulate arrays. 
 *      .push() - adds to the end of the array
 *      .unshift() adds to the front of the array
 *      .pop() deletes last element of array
 *      .shift() deletes first element of array
 */
 
//Example:
people.push('william') //adds string to end of array
people.unshift('louie') //adds string to beginning of array
people.pop() //deletes console.log off array
people.shift() //deletes kyle off array

/**
 * OBJECTS:
 * 0.   An object in Js is similiar to an array in the sense that we use it as a 
 *      container. To create an object you start by using curly brackets {}. An 
 *      object is made up of key/value pairs. We are able to access values in objects
 *      by using bracket or dot notation.
 */
 
//Example:
var myself = {
    firstName: 'kyle',
    lastName: 'kelly',
    age: 25,
    gender: 'male'
}
console.log(myself.firstName) //logs kyle to console
console.log(myself.age) //logs 25 to console

/**
 * FUNCTIONS:
 * 0.   A function is a block of code that allows us to reuse it to avoid writing 
 *      code multiple times. A function is made of a Name, Parameters/arguments, Function
 *      body, and a return statement. A function will only run if it is called. Variables
 *      declared inside of a function become function scoped.
 */

//Example:
function myFunc(a, b){ //starts with keyword function, name of func, parameters
    return a * b //return statement 
}
myFunc(3, 4) //Calling our function and passing in our arguments

/**
 * UNDEFINED:
 * 0.   The undefined property tells us that a variable has not been assigned a value
 *      or not declared at all. In a function, if you do not have a return statement,
 *      it also returns undefined.
 */

//Example:
var x;
console.log(x) //will log undefined because we didn't give x a value

/**
 * NULL:
 * 0.   Null is an empty or non existant value but unlike undefined, null must be
 *      assigned. Useful for intentional absence of value.
 */

//Example:
let a = null;
console.log(a) //logs null to the console.

/**
 * NAN:
 * 0.   NaN stands for Not-A-Number. It is the returned value for when a math 
 *      function fails. NaN compares unequal(false) to any other value and also returns
 *      false when compared to itself. To indicate whether a value is NaN you can 
 *      use isNaN() property.
 */

//Example:
//NaN === NaN //returns false
isNaN(NaN) //returns true

/**
 * Infinity and -Infinity
 * 0.   Infinity is a variable in the global scope. The value given to infinity
 *      is greater than any other number. Positive numbers multiplied by infinity 
 *      equals infinity, and any other number divided by infinity equals 0. It is displayed
 *      when a number exceeds the upper limit of floating point numbers. The value
 *      of infinity is Number.POSITIVE_INFINITY, and the opposite for negative infinity.
 * 1.   You can only use Number.POSITIVE_INFINITY if you put a numeric value in place
 *      for Number, it will return undefined.
 */
//Example:
var n = (Number.POSITIVE_INFINITY); //gives our infinity a variable
console.log(n); //logs infinity to the console

/**
 * What is the difference between primitive/simple and complex data types?
 * 0.   All primitive data types are also simple data types. It is data that has no methods.
 *      String, number, boolean, null, undefined, and symbols are considered primitive
 *      values because they are immutable which means they can not be changed.
 * 
 * 1.   Complex data types are all object data types and can be altered through
 *      properties or methods. Complex data types can collect, hold, or process
 *      something. Like a function, array, or object.
 */
 
/**
 * Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
 * What does that mean, and how are they different?
 * 
 * 0.   When we assign a variable using the assignment operator we COPY the variable
 *      to a new variable. Copied by value.
 * 
 *      Example: var x = 10;
 *               var y = 'abc'
 * 
 *      But we can also do: var a = x
 *      var b = y
 *      console.log(x, y, a, b) --> 10, 'abc', 10, 'abc'
 *      Both a and x contain 10. They are seperate but the values were copied.
 * 
 * 1.   When an object is copied to another variable, it looks like it would just copy
 *      but all objects are copied by reference.
 * 
 *      var arr = [1];
 *      var num = arr;
 * 
 *      Each of those variables now contains a reference to the same array.
 *      If we alter our arr variable, our variable num, will also see the same changes.
 */ 