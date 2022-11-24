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
//drawText(WHITE_KING, width/2, height/2, 'black', 64);
const randArrayAvg = (count) =>{
const arr = [];
for (let x = 0; x<count; x++){
  arr.push(Math.round(Math.random()*100))
}
const ordered = arr.sort((a,b) => a-b)
return {array: arr, arrayValue: arr.reduce((x, c) => x+c,0), arrayAvg: ( arr.reduce((x, c) => x+c,0))/arr.length, arrayMedian: ordered%2 == 0 ? arr[arr.length.ceil/2] : (arr[arr.length/2]+arr[arr.length/2+1])/2}
}
const jackpotOddsTest = (count, times) =>{ //leave as 1000, 100 in the repl preferably
  const jackpotOdds = []
for (let test =0; test < times; test++){
jackpotOdds.push((count - randArrayAvg(count).array.indexOf(100))/(count/100))
}
return jackpotOdds
}
