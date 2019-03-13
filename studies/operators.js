  //  ASSIGNMENT OPERATORS

  //  0. Assignment: x = y -> x = y
  //      a. Used to assign a value to a variable.
          // Example:
            var x = 3;

  //  1. Addition Assignment: x += y -> x = x + y
      //  a. The addition assignment the value and assigns the result to the variable.
          // Example:
            var x = 2;
            var y = 3;
            x += y; //5

  //  2. Subtraction Assignment: x -= y -> x = x - y
      //  a. The subtraction assignment subtracts the value and assigns the result to the variable.
          // Example:
            var x = 2;
            var y = 3;
            x -= y; //-1


  //  3. Multipulcation Assignment: x *= y -> x = x * y 
        // a. The multipulcation assignment multiplies the value and assigns the result to the variable.
        // Example:
          var x = 2;
          var y = 3;
          x *= y; //6

  //  4. Division Assignment: x /= y -> x = x / y
        // a. Division assignment divides the value and assigns the result to the variable.
        // Example:
        var x = 4;
        var y = 2;
        x /= y; //2

  //  5. Remainder Assignment: x %= y -> x = x % y
        // a. Remainder assignment divides the variable and assigns the remainder to the variable.
        var x = 4;
        var y = 2;
        x %= y; //0


  //  7. Left Shift Assignment: x <<= y -> x = x <<= y
        // a. Moves the specified amount of bits to the left and assigns the result to the variable.

  //  8. Right Shift Assignment: x >>= y -> x = x >>= y
        // a. Moves the specified amount of bits to the right and assigns the result to the variable.

  //  9. Unsigned Right Shift Assignment: x >>>= y -> x = x >>>= y
        // a. Moves the amount of bits to the right.

  //  10. Bitwise AND Assignment: x &= y -> x = x & y
        // a. Uses the binary representation of both operands, does a bitwise AND operation 
        // on them and assigns the result to the variable.

  //  11. Bitwise XOR Assignment: x ^= y -> x = x ^ y
        // a. Uses the binary representation and does a bitwise XOR operation on them and 
        // assigns the result to the variable.

  //  12. Bitwise OR Assignment: x |= y -> x = x | y
        // a. Uses the binary rep. of both operands does a bitwise OR operation and assigns
        //   to the variable.


  //  ARITHMETIC OPERATORS
   
  //  0. Addition: x + y
  //      a. Produces the sum of operands or concatenates a string.
       var x = 5;
       var y = 3;
       x + y; //8
             

  //  1. Subtraction: x - y
  //      a. Subtracts two operands producing the difference.
       var x = 2;
       var y = 1;
       x - y //1

  //  2. Division: x / y
  //      a. Left operand is the dividend and the right operator is divisor.
       var x = 15;
       var y = 5;
       x / y; 
       //3

  //  3. Multipulcation: x * y
  //      a. Multiplies operands.
       var x = 2;
       var y = 2;
       x * y; //4

  //  4. Remainder: 12 % 5 -> 2
  //      a. Returns the remainder left over after being divded. Takes sign of dividend.
       var x = 12;
       var y = 5;
       x % y; //2

  //  5. Exponentiation: 2 ** 3 -> 8 -> because 2 * 2 * 2 is 8
  //      a. Returns result of raising first operand to the power of the second operand. 

  //  6. Increment: ++ 
  //      a. Adds 1 to its operand and returns the final value.
       var x = 3;
       var y = x++; //y = 3, x = 4

  //  7. Decrement: --
  //      a. Subtracts 1 to its operand and returns final value.
       var x = 3;
       var y = x--; //y = 3, x = 2

  //  1. The == is loosely equals to. 
       let a = 5
               a == 8 //-> returns false
               a == 5 //-> returns true
               a == '5' //-> returns true

  //  2. The === is STRICTLY equals to. 
                a === 5 //-> true
                a === '5' //-> returns false bc 5 is a string

  //  3. The != is not equal.
                a != 8 //-> returns true

  //  4. The !== is not equal value or not equal type.
                a !== 5 //-> returns false
                a !== '5' //-> returns true

  //  5. The > is greater than.
                a > 8 //-> returns false

  //  6. The < is less than.
                a < 8 //-> returns true

  //  7. The >= greater than or equal to. 
                a >= 8 //-> returns false

  //  8. The <= is less than or equal to.
                a <= 8 //-> returns true

  //  LOGICAL:

  //  1. The && is the and operator.
            let b = 6 
            let v = 3
            b < 10 && v > 1 //-> returns true

  //  2. The || is the or operator.
            b == 5 || v == 5 //-> returns false

  //  3. The ! is the NOT operator.
           !(b == v) //-> returns true

  //  UNARY:

  //  0.  typeof operator: typeof and then operand. Represents the object or primitive
      //  and then returns it's type. 
      //  Example:
                typeof 12 === 'number';
                typeof '' === 'string';
                typeof 'hey' === 'string';
                typeof true === 'boolean';
                typeof undefined === 'undefined';
                typeof {a: 1} === 'object';
                typeof [1, 2, 3] === 'object';
                typeof function(){} === 'function';

  //  1. ! converts the operand into a boolean before firing it.
      //  Example: 
                !false; //returns true
                !NaN; //returns true
                !true; //returns false

  //  2. - comes in front of the operand and converts non number data types into numbers.
      //  Example:
                -false;  //returns -0
                -3;  //returns -3
                -true; //returns -1

/*
*   TERNARY:
*   
*   0.  The ? operator is used as a shortcut for an if statement. 
*       if(condition) {
*            value if true;
*        } else {
*            value if false;
*        }
*        
*        We can put all of that in one block of code below:
*        
*        condition ? value if true : value if false  
*/
    //  Example:
         2 > 1 ? console.log('true') : console.log('false');
