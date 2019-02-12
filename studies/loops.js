Loops:

/*
*   LOOPS:
*   0.  While loops: Loops through a block of code as long as a specified condition
*       is true. 
*       Syntax: while(condition){
*                   //code to be executed
*               }
*/

var text = "";
var i = 0;
while (i < 10) {
  text += "The number is " + i;
  i++;
}
//This will return "The number is 0" and so on until 9.

/*
*   1.  For loops: loops through a block a code a number of times.
*       Typically use this to loop through arrays. The purpose if the incrementer
        in a for-loop is that it increases a value each time the code has been executed.
*/
var people = ['Kyle', 'Sandy', 'Richard', 'Maddy', 'Wesley']
for(var i = 0; i < people.length; i++){
  console.log(people[i])
}
//Prints my entire array to the console.

/*
*   For-in loops: loops through the properties of an object.
*   Syntax: for(var in object){
*               code block to be executed
*           }
*/
var string1 = "";
var obj = {name: 'kyle', interests: 'sports', age: 24};
for (var property1 in obj){
    string1 += obj[property1];
}
console.log(string1);

//I made a counting forward counting loop, this a backward counting loop:
for(i = 10; i > 0; i--){
  console.log(i);
}

//Looped through an array going forward above, this is looping backward through array:
var people1 = ['Kyle', 'Sandy', 'Richard', 'Maddy', 'Wesley'];
for(var i = people1.length-1; i >= 0; i--) {
console.log(people1[i]);
}
