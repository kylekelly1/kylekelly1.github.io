/**
 * FUNCTIONS:
 * 
 * 0.   Using functions we must call a function by the built in keyword 'function'.
 *      After that we name the function, and then give it parameters, open curly braces,
 *      and inside we put the code block to be executed and then close curly braces.
 *      A function is only defined by its RETURN STATEMENT! To make our function run
 *      we must call it and give it arguments to replace the parameters outside of our
 *      function!
 * 
 * 1.   The difference between a functions parameters and arguments is that the parameters
 *      are just place holders to allow you to reuse the function somewhere else in your
 *      code. When we finally call our function is when we pass in our arguments at call time.
 */
 
function doSomething(parameter){ //defining our function
    return parameter; //block of code and return statement
}
doSomething('Hey!'); //arguments

/**
 * Syntax:
 *  function functionName(parameters){
     statements
 }
 functionName(arguments);
*/
function thisIsTheNameOfFunction(a, b){
    return a * b;
}
thisIsTheNameOfFunction(3, 4);

/**
 * Assigning a function to a variable:
 * 
 * var x = function(a, b){
     return a * b
 }
*/

var hey = function(a, b){
    return a * b;
}
hey(3, 4);

/**
 * The optional inputs functions can take are considered parameters, and we state those
 * after the name of our function in parenthesis. When we call our function is when we 
 * specify the arguments and for whatever we put in our definition is what our output would be.
 */

function inputAndOutput(a, b){ //parameters
    return a + b;
} 
inputAndOutput(3, 4) //arguments

/**
 * Scope:
 * 0.  Javascript has 2 scopes, global and local scope. Each function in JS creates a new scope
 *     variables defined inside a function are not accessible from outside of the function.
 */
//can't use var myDog here bc it's undefined
function thisIsScope(){
    var myDog = 'Louie';
} 
//also can't use var myDog because it's function scoped.
//Avoid global variables as much as possible!

/**
 * CLOSURES - Functions form closures around the data they store. If an object
 * returned from the function and is held in memory somewhere, that closure stays alive
 * and data can continue to exist in these closures.
 * 
 *      1. A funciton has access to the parent scope, even after the parent function
 *          has closed. Only way for closures to work is if you have a function with
 *          a nested function inside of it.
 */
var doSomething1 = function(){
    var counter = 0;
    return function(){
        counter += 1;
        return counter;
    };
}();
doSomething1();
doSomething1();
doSomething1();

//Our counter is 3 bc we have an anonymous function that has a closure because it access' the parents scope variable.