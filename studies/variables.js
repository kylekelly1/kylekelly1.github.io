/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * LET:
 * 
 * 0. Let allows you to declare a variable, but the variables you declare are limited 
 *    in scope to the block, statement or expression. This makes it different from var
 *    since var is globally scoped. 
 */
 
//Example:
let letVariable = 'this is a let variable';

for(let i = 0; i < 10; i++){
   console.log(i);
   //this will be logged to the console since it's inside the block scope
}
//console.log(i) --> error saying i is not defined, since it is block scoped by the keyword let.

/**
 * CONST:
 * 
 * 0. Similiar to let, constants are block scoped whose scope can be either global
 *    or local to the block it's declared. It creates a read only reference to the value
 *    you assign it to, which means you can not reassign a const variable.
 */

//Example:
const favPizza = 'pineapple';
console.log(favPizza); //---> 'pineapple';
//If we tried to change the value of favPizza we would receive a syntax error.


/**
 * HOISTING:
 * 
 * 0. Within a variables current scope wherever it is declared, behind the scenes before
 *    the code is run, the variable will be hoisted to the top, but only the declaration.
 *    If the variable is initalized the current value at the top of the scope will
 *    be set to undefined.
 * 
 * 1. Hoisting is the action of moving all variable and function declarations to the
 *    top of the current scope. Once again, variables declared with let or const are not
 *    hoisted.
 */ 
