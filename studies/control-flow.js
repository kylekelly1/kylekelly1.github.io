// CONTROL FLOW

/**
 *  0.  CONTROL FLOW:
 *      Control flow is the order in which the computer executes statements. Control
 *      flow is important because it affects the order of execution since Javascript
 *      reads from top to bottom. Once it hits a statement that's true, the code
 *      stops running.
 */

Example:
function greeter(hour){
    if(hour <= 11){
        console.log("Good Morning");
    } else if(hour > 11 && hour <= 16){
        console.log('Good afternoon');
    } else if(hour > 16 && hour <= 21){
        console.log('Good evening');
    } else{
        console.log('Good night');
    }
}

/**
 *  1.  If our control flow were to be off in our greeter example our code would
 *      not run the way we would want it to. Our final else statement would also
 *      be considered our default statement.
 */

//  0.  SWTICH STATEMENT

var text = 'Hello';
switch(text){
    case 'Hey':
        console.log("Hey");
        break;
    case 'Heya':
        console.log('Heya');
        break;
    case 'Hello':
        console.log("Correct Hello");
        break;
    default:
        console.log("This is me, default");
        break;
}
