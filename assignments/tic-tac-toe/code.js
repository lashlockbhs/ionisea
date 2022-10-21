// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
// for me:  *  drawLine(x1, y1, x2, y2, color, lineWidth)
const coordArray = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
]
const max = Math.max(width,height)
const min = Math.min(width,height)
let player = 'X';
for (let editConst = 0; editConst <= 1; editConst += 1/3){
  drawLine(max/2-min/2 + min*editConst, height, max/2-min/2 + min*editConst, 0, 'black', 2)
  drawLine(max/2-min/2, height*editConst, max/2+min/2, height*editConst, 'black', 2)
}
const shher = (array) =>{
return array.findIndex((element) => element >12)
}
let turns = 0; 
registerOnclick((x, y) => {
  //for (let totalTurns = 0; totalTurns < 9; totalTurns++){ // (does not work!!!!!!! used if )
  if (turns <9){
  drawText(player, x-min*0.1, y+min*0.1, 'black', min * 0.3);
  player == turns ? player = 'O' : player = 'X';
  turns++
  console.log('player: ' + player, 'turn: ' + turns, 'coords: ' + (width/x),(height/y))
}});
const yPos = 3 // 1, 3, 5
const xPos = 5 // 1, 3, 5  
drawText(player, max/2-min/2 - min*0.1 + (min * xPos/6), min*0.1 + min*yPos/6, 'black', min * 0.3)

