/*
*   String manipulation with operators:
*
*   0.  There are methods to concatenate strings, but the preferred way to 
*       concatenate them would be to use the + operator. You can also build
*       strings with the + operator as well. 
*
*       Example: 'kyle' + 'kelly' -> returns kylekelly
*           a. If we wanted to add a space we would do the following:
*               Example: 'kyle' + ' ' + 'kelly' -> returns kyle kelly
*/

/*
*   String manipulation with methods:
*
*   0.  string.length returns the length of a string
*       Example: var name = 'kyle'
*                var txt = name.legnth --> console.log(txt) -> returns 4
*
*   1.  .toLowerCase() and .toUpperCase() takes the string and coverts it to either  
*       all lower case, or all upper case.
*/
var txt = "KyLe Is StUdYiNg"; 
    txt.toUpperCase();

var txt1 = "KYLE IS STUDYING";
    txt1.toLowerCase();


/**The concat() method is another popular method to manipulate string. It takes the 
 * argument of what other string you want to add to the orignial string.
 */
 var str = 'hey';
 var str1 = 'sup';
 str.concat(' ', str1);
 
/** The slice() method takes a section of the string and returns it as a new string
 * but it does not affect the original string. Just gives you back what you wanted
 * out of that string as a new one. It uses the index number of the characters as its
 * argument.
 */
 var str2 = 'hey sup World';
 str2.slice(4, 7); //gives back a string of sup
 
/**The endsWith() method looks at the end of your string to determine if your string
 * ends with your specified string. Returns a boolean value.
 */
 var example = 'My name is Kyle';
 example.endsWith('e'); //returns true
 
/**The substring() method acts very similiar to the slice method. It returns part
 * of the string between the two indexes (start and end) or just to the end of the string.
 */ 
 var str3 = 'hey sup world';
 str3.substring(4); //returns sup world as my new string
 
/**
 * The includes() methods determines if a string exists inside of a another string.
 * This is typically useful if you have a very long string and are trying to determine
 * if a word exists within it. It returns a boolean value.
 */

let myName = "Kyle Joseph Kelly";
myName.includes('Martin'); // returns false
myName.includes("Kelly"); //returns true
 
