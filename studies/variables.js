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

/*
* LET:
*
*0. Let allows you to declare a variable, but the variables you declare are LIMITED
*   in scope to the block, statement, or expression which you used it. This makes it different
*   from VAR because VAR declares a variable regardless of the block scope.
*   
*1. We create a variable declared by let similarly to the way we create one using VAR.
*       
*    a. We start with the keyword, let, followed by a name, the assignment operator and then
*     the value that we are giving it.
*/
// 1. Creating a let variable
let letVariable = 'this is a let variable';
console.log(letVariable); //prints => this is a let variable

//  2. Block
//       a. Let variables are typically used when there's limited use of those variables.
   
//   For example:
   for(let i = 0; i < 10; i++){
       console.log(i); //i is visible and will log 0, 1, 2,..., 9    
   }
//   console.log(i) since this is out of our for loop we get an error of
//   "i is not defined" because i is not visible.

/*
*   CONST:
*0. Similar to the let statement, constants are block scoped whose scope can be either 
*   global or local to the block it is declared. The const declaration creates a read
*   only reference to the value you assign it. This does not mean that it becomes 'invisible'
*   but it means that the variable identifier cannot be reassigned. 
*/

//  1. Creating a const variable
const favPizza = 'pepperoni';
console.log(favPizza); //prints => pepperoni
/*If we try to change the value of our const variable we will receive an error of
*Uncaught SyntaxError: Identifier 'favPizza' has already been declared.*/

/*
*   HOISTING VARIABLES:
*0. Within a variables current scope no matter where it is declared, behind the scenes   
*   the variable will ALWAYS be hoisted to the top. However, only the delcaration will be hoisted.
*   IF the variable is initialized the current value at the top of the scope will be set to
*   undefined.
*
*1. Hoisting is the interpreter's action of moving all variable and function declarations
*   to the top of the current scope. Variables that are declared with LET and CONST are NOT
*   hoisted!
*
*   Hoisting Function Definitions:
*2. Hoisting happens before code execution which means that function declarations and var
*   are hoisted to the top of scope. Function definitions move up ahead of variables 
*   in the scope, and are also hoisted with their definitions. 
*
*/
//Example:
var x = 5; //initialize x
console.log(x + y); //console log 
var y = 7; //initialize y
/*  In this example we would receive back in the console 5 undefined.
*   Because right when JavaScript hits that console.log it thinks it's job is over,
*   but if we were to move our y initialzation above our console.log we would receive
*   the correct outcome we are wanting.
*/
