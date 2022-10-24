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
let turns = 0; 
registerOnclick((x, y) => {
  //for (let totalTurns = 0; totalTurns < 9; totalTurns++){ // (does not work!!!!!!! used if )
  if (turns <99){
  turns+= 25
  drawText(turns, x-min*0.1, y+min*0.1, 'black', min * 0.33);
  //player == 'X' ? player = 'O' : player = 'X';
  console.log('turn: ' + turns, 'coords: ' ,x,y)
  if (y < 1/3 * height){

  }
}});
const yPos = 0 // 0, 1, 2
const xPos = 0 // 0, 1, 2 
drawText(player, max/2-min/2 - min*0.1 +min/6 + (min * xPos/3), min*0.1 + min/6 + min*yPos/3, 'black', min * 0.3)

