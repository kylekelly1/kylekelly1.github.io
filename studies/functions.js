/*
*   FUNCTIONS:
*   -The two phases to using functions: First we must __? Next we can execute 
*   (or two other words for executing a function) a function by?
*   
*       1.  To using functions we first must call a function by the built in keyword
*           'function' and then we must name it. After that give it parameters, open           
*           curly braces and inside we put the code block to be executed close curly 
*           curly braces. A function is only defined by its return statement. To
*           actually make our function run we must CALL our function outside of the 
*           curly braces. functionName(arguments).
*/

/*
*   -What's the difference between a function's parameters and arguments PASSED    
*   to a function?    
*
*       1.  The difference between a function's parameters and arguments is that 
*           the parameters are just place holders to allow you to reuse the function
*           somewhere else in your code. When we finally call our function is when
*           we pass in our arguments for how we want to use the function is that 
*           certain situation.
*/
function doSomething(parameter){ //parameters go after you name the function
    return parameter;
}
doSomething('hey'); //arguments go down here

/*
*   -What's the syntax for a named function?
*
*       1.  function functionName(param1, param2){
*               statements
*           };
*           functionName(arguments)
*/

function thisIsTheNameOfOurFunction(a, b){
    return a * b;
}
thisIsTheNameOfOurFunction(3, 4); //we use the name to call our function!

/*
*   -How do we assign a function to a variable?
*
*       1.  var x = function (a, b){
*                       return a * b
*                   };
*
*       2.  Since we stored a function in x, the variable can now be used as a function.
*/

var hey = function(a, b){
    return a * b;
};
hey(3, 4); //since we assigned our function to a variable, we use that variable name 
           // to call our function.

/*
*   -Function can OPTIONALLY take inputs, and OPTIONALLY return a single value.
*   How do we specify inputs, and how do we specify outputs?
*
*       1.  The optional inputs functions can take are considered parameters,
*           and we state those after the name of our function. When we call our function
*           is when we specify the arguments and for whatever we put in our definition
*           is what our output would be.
*/

function inputAndOutputs(a, b){ //a and b are considered our parameters
    return a + b;
}
inputAndOutputs(9, 10); //9 and 10 are considered our arguments that we pass in when we call it!

/*
*   -Scope: Functions can see and modify variables in parent or global scopes.
*   The inverse is not true.
*
*       1.  Javascript has 2 scopes, global and local. Each function in JS creates
*           a new scope, variables defined inside of a function are not 
*           accessible from outside the function. 
*/

//code here can not use myDog variable 
function thisIsScope(){
    var myDog = "Louie";
    return myDog;
    //code inside of my function can use myDog because the variable is function scoped.
}
thisIsScope();
//code here also can not use myDog variable because it is function scoped!
//Avoid global variables as much as possible.


/*
*   -Closures: Functions form closures around the data they house. If an object
*   returned from the function and is held in memory somewhere, that closure stays
*   alive, and data can continue to exist in these closures! 
* 
*       1.  A function has access to the parent scope, even after the parent function
*           has closed. Only way for closures to work is if you have a function
*           with a nested function inside of it. 
*/

var doSomething1 = (function (){
    var counter = 0;
    return function(){
        counter += 1;
        return counter;
    };
})();
doSomething1();
doSomething1();
doSomething1();
/**Our counter is 3, reason why is because we have a anonymous function that has a closure
 * because it access' the counter variable in it's parent's scope. 
 */
