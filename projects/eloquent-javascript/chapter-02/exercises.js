
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) {
  let hash = '#';
  for(let i = 0; i < x; i += 1){
    console.log(hash);
    hash += '#';
  }
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//15
//3
//5
function fizzBuzz() {
  for(var i = 1; i < 16; i++){
    if(i % 15 === 0){
      console.log('fizzbuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('buzz');
    } else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let size = num;
  let board = "";
  for(var y = 0; y < size; y++){
    for(var x = 0; x < size; x++){
      if((x + y) % 2 === 0){
        board += " ";
      } else{
        board += '#';
      }
    }
    board += "\n";
  } console.log(board);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
