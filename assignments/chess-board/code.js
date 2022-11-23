const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
drawText(WHITE_KING, width/2, height/2, 'black', 64);
const randArrayAvg = (arr) =>{
for (let x = 0; x<14; x++){
  arr.push(Math.round(Math.random()*100))
}
return {array: arr, arrayValue: arr.reduce((x, c) => x+c,0), arrayAvg: ( arr.reduce((x, c) => x+c,0))/arr.toString().length
}}
