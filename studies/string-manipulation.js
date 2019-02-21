/**
 * STRING MANIPULATION:
 * 
 * 0. string.length returns the length of a string.
 *      Example: var name = 'Kyle';
 *          var text = name.length --> console.log(text) ---> output 4
 * 
 * 1. .toLowerCase() and .toUpperCase() takes the string and converts it to either
 *    all lower case, or all uppercase.
 */

var txt = 'KyLe Is sTuDyInG';
txt.toUpperCase();

var txt1 = 'KYLE IS HUNGRY';
txt1.toLowerCase();

/**
 * The slice() method takes a section of the string and returns it as a new string
 * but it does not affect the original one. Just gives you back what you wanted out
 * of that string as a new one. Uses index chars as its arguments.
 */ 
var str = 'hey sup world';
str.slice(4, 7); //--> output would be string of sup

/**
 * The endsWith() method looks at the end of your string to determine if your
 * string ends with a certain character. Returns a boolean value.
 */
var example = 'My name is Kyle';
example.endsWith('e'); // ---> true

/**
 * The substring() method acts very similiar to the slice method. It returns
 * part of the string between the two indexes (start to end) or just to the end 
 * of the string.
 */
var str1 = 'hey sup world';
str1.substring(4) //----> returns sup world as my new string

/**
 * The includes() method determines if a string exists inside of another string.
 * This is typically useful if you have a very long string and are trying to determine 
 * if a word exists within it. Returns a boolean value.
 */
let myName = 'Kyle Kelly';
myName.includes('Martin') //---> false
myName.includes('Kelly') //---> true
 