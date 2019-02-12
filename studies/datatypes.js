/*
*   NUMBERS: 
*   0. JavaScript only has one type of numbers.
*       a. They can be written with, or without decimals.
*/
//Example:
var x = 20;
var y = 10;
var z = x + y;
console.log(z); //z will return 30

/*
*   STRINGS: 
*   0. Strings in JavaScript are a series of characters. All strings must be written
*   with single or double quotes. You can also use quotes inside the string as long
*   as they don't match the quotes surrounding the string.
*    
*   1. You can obtain the length of any string by using the built in property .length   
*/

//Example:
var myName = "Kyle"; //"Kyle" is a string 
var string = "This is Kyle's string"; 
//In the string above I used an apostrophe but since it has double quotes surrounding it, it passes.
var myName = "Kyle";
myName.length; //will return 4 since Kyle has 4 characters in the string

/*
*   BOOLEANS: 
*   0. Booleans represent one of two values which would be TRUE or FALSE.
*       a. To receive a boolean value we would use comparison operators which we will read
*           more about later on in this project.
*   1. If the value is 0, -0, null, false, NaN, undefined, or an empty string, the object
        has an initial value of false.
*/

//Example:
Boolean(10 > 9); //returns true
10 > 9; //returns true
var x = 0;
Boolean(x); //returns false

/*
*   ARRAYS: 
*   0. Arrays are a storage container in JavaScript. It allows us to store multiple values
*      in a single variable. Instead of creating multiple variables for every value we have,
*      we simply create an array. Arrays allow us to loop through and access every piece of 
*      information we have stored through by referring to an index number. We create arrays by
       using open and closed brackets []. We also ACCESS arrays through bracket notation as well.
*   1. Every element inside of an array must be seperated by a comma.
*/

//Example: 
var people = ['kyle', 'maddy', 'sandy', 'richard']; //my array
console.log(people[1]); //maddy would log to the console

//If I wanted to access the last element in my array I would use .length - 1
console.log(people[people.length - 1]); //would show last element, richard

//If I wanted to know how many elements are inside of my array I would use .length
console.log(people.length); //3 would log to the console since I have 4 elements, 0-3

/*2. There are also many important methods to manipulate arrays. Of which include
*    .push() method which will add an element to the end of my array
*    .unshift() method will add an element to the front of my array
*    .pop() method will delete last element of my array
*    .shift() method will delete first element of my array
*    .splice() method will add an element to the middle of my array. It accepts
*    3 arguments the FIRST argument will be what position I want to add my element
*    SECOND argument would be how many things I would want to delete
*    THIRD argument would be what I want to add
*/

//Example:
people.push('wesley');//adds string of wesley to the end of my array
people.unshift('louie'); //adds string of louie to front of my array
people.pop(); //deletes string of richard off my array, don't need anything in ()
people.shift(); //deletes string of kyle off my array, don't need anything in ()
people.splice(2, 0, 'monk');//will add string of monk to position 2 of my array

/*
*   OBJECTS: 
*   0.  An object in JavaScript is similar to an array in the sense that we use 
*       it as a container to store information in. To create an object you start 
*       by defining and initalizing a a variable. An object is made up of the name
*       which we call key/value pairs, and then the value that we give the k/v pair.
*       The value of an object can consist of strings, number, an array, and functions.
*   1.  We are able to access values in objects by using bracket notation or dot 
*       notation. Objects are also identified by using curly braces {} and the keys in 
*       the object will ALWAYS be strings, but will not require quotes. After each
*       key/value pair, it is required that we attach a colon behind it. 
*/

//Example:
var myself = {
    firstName: 'Kyle',
    lastName: 'Kelly',
    age: 24,
    gender: 'male',
    interests: ['music', 'sports'],
};
console.log(myself.firstName);//will access the string of Kyle
console.log(myself.interests[1]); //will access the string of sports
console.log(myself.age); //will log 24 to the console

/*
*   FUNCTIONS: 
*   0.  A function is a block of code that allows us to reuse it to avoid writing
*       code multiple times and keeping everything DRY. A function is made of a 
*       Name, Parameters/arguments, Function body, and a return statement. 
*       DEFINING A FUNCTION DOES NOT RUN ANY CODE. A function will only run if 
*       it is called. Variables delcared within a function become LOCAL
*       to the function, which can only be accessed within the function. 
*/

//Example:
function myFunction(a,b){ //starts with keyword function, name of func, parameters
    return a * b; //return statement, what I want the outcome to be
}
myFunction(3,2);//we CALL our function to make it run, start with name of function and then arguments

/*
*   UNDEFINED:
*    0.  The undefined property tells us that a variable has not been assigned a value or
*        or not delcared at all. In a function, if you do not have a return statement,
*        it also returns undefined. 
**/

//Example:
var x; //in this example we do not assign a value to x
console.log(x); //will log undefined on the console since x was never given a value.

/*
*   NULL:
*   0.  Null is an empty or non existant value, but unlike 'undefined', null
*       must be assigned. Mainly use this for intentional absence of a value.
*/

//Example:
let a = null; //assigning the value null to variable a
console.log(a); //null would print to the console

/*
*   NaN:
*   0.  NaN stands for Not-a-Number. It's pretty much a non configuarable property.
*       It is the returned value for when a math functions fail. NaN compares unequal 
*       (false) to any other value and also returns false when compared to itself.
*       To indicate whether a value is NaN we can use isNaN() property.
*/

//Example:
//NaN === NaN; //returns false
isNaN(NaN); //returns true because it's asking if it is a number, and NaN is not.

/*
*   INFINITY AND -INFINITY
*   0.  Infinity is a variable in the global scope. The value given to infinity
*       is greater than any other number. Positive numbers multiplied by infinity
*       equals infinity, and any number divided by infinity equals 0. It is displayed
*       when a number exceeds the upper limit of floating point numbers. The value
*       of infinity is Number.POSITIVE_INFINITY. And the opposite for -infinity
*       Number.NEGATIVE_INFINITY.
*    1.  You can only use Number.POSITIVE/NEGATIVE_INFINITY. If you put a numeric value
*        in place for Number, it will return undefined.
*/

//Example:
var n = (Number.POSITIVE_INFINITY); //give our infinity a variable
console.log(n); //logs Infinity to the console, same would happen for NEGATIVE_INFINITY

/*
*   What is the difference between primitive/simple and complex data types?   
*   0.  All primitive data types are also simple data types. It is data that has no methods and is not an object. So,
*       a string, number, boolean, null, undefined, and a symbol are considered    
*       primitive data types because they are immutable which means they can NOT be 
*       changed. 
*
*   1.  Complex data types are all object data types and can be altered through properties or methods.
*       Complex data types can collect, hold, or process something. Like a function,
*       array, or object.
*/

/*
*   Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
*   What does that mean, and how are they different?
*
*   0.  When we assign a variable using the assignment operator we COPY the variable 
*        to a new variable. Copied by value.
*       
*       Example: var x = 10;
*                var y = 'abc';            
*       
*       BUT we can also do: var a = x
*                           var b = y
*                           console.log(x, y, a, b) --> 10, 'abc', 10, 'abc'
*       Both a and x contain 10. They are seperate but the values were copied. 
*
*   1.  When an object is copied to another variable, it looks like it would just COPY
*       but all objects are copied by reference. 
*       
*       Example: var arr = [1];
*                var num = arr;
*       Each of those variables now contains a reference to the same array.
*       If we alter our arr variable, num, will also see the changes as well.
*/
