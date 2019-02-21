/**
 * LOOPS: 
 * 0. While loops: Loops through a block of code as long as specified condition
 *    is true.
 */
var txt = "";
var i = 0;
while(i < 10){
  txt += 'The number is ' + i;
  i++;
}
//Returns The number is 0 and so on until 9.

/**
 * FOR LOOPS: Loops through a block of code a number of times. Typically use this
 * to loop through arrays. The purpose of the incrementer in a for-loop is that it
 * increases a value each time the code has been executed.
 */
var people = ['kyle', 'richard', 'sandy', 'wesley'];
for(var i = 0; i < people.length; i++){
  console.log(people[i]);
}
//Prints entire array to the console.

//For-in loops: loops through the properties of an object.
var string1 = '';
var obj = {name: 'kyle', interests: 'sports', age: 25};
for(var key in obj){
  string1 += obj[key];
}
console.log(string1);

//Backwards counting loop using a for loop:
for(i = 10; i > 0; i--){
  console.log(i);
}

//Looping backwards through an array:
for(var i = people.length - 1; i >= 0; i--){
  console.log(people[i]);
}