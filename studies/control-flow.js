// CONTROL FLOW

/*
*   CONTROL FLOW:
*   0.  Control flow is the order in which the computer executes statements. Control
*       flow is important because it affects the order of execution since JavaScript    
*       reads from top to bottom. Once it hits a statement that's true, the code
*       code stops running. 
*/

Example:
function greeter(hour){ //start of our function
    if(hour <= 11){
    //if the hour is less than or equal to 11
        console.log("Good Morning"); 
    //log Good Morning because it will mean it's morning
    } else if (hour > 11 && hour <= 16){
    //If the hour is greater than 11 AND less than or equal to 16 
        console.log("Good afternoon");
    //Log Good afternoon 
    } else if (hour > 16 && hour <= 21){
    //If those statements aren't true, than come to this one
    //If the hour is greater than 16 AND less than or equal to 21
        console.log("Good evening");
    //Log Good Evening
    } else {
    //If none of those statements are true
        console.log("Good night");
    //Log Good night
    }
}
greeter(16);

/*  1.  In our greeter example you can see why control flow would be important.
*       If our control would be off and maybe we switched lines 13 and 15, our code 
*       would not run the way we would want to, and frankly it would not make 
*       much sense. Also, our final else statement would be considered our default.
*/

/*
*   SWITCH STATEMENT:
*   0.  The proper syntax for a switch statement would be:
*       
switch(expression){
    case x:
    //code block
    break;
    case y:
    //code block
    break;
    default:
    //code block
}
*/
var text = "Hello";
switch(text){
    case "Hey":
        console.log("Hey");
        break;
    case "Heya":
        console.log("Heya");
        break;
    case "Hello":
        console.log("Correct Hello");
        break;
    default:
        console.log("This is I, default!");
        break;
}

