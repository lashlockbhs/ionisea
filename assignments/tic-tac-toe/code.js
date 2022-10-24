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
const yPosConst = min*0.1 + min/6
const xPosConst = max/2-min/2 - min*0.11 + min/6
let player = 'O';
for (let editConst = 0; editConst <= 1; editConst += 1/3){
  drawLine(max/2-min/2 + min*editConst, height, max/2-min/2 + min*editConst, 0, 'black', 2)
  drawLine(max/2-min/2, height*editConst, max/2+min/2, height*editConst, 'black', 2)
}
let turns = 0; 
let xPos;
let yPos;
registerOnclick((x, y) => {
  if (turns <9){
  turns++
  
  console.log('turn: ' + turns, 'coords: ' ,x,y)
  if (y < 1/3 * height){
    yPos = yPosConst
  } else if (y < 2/3 * height){
    yPos = yPosConst + 1/3 * height
  } else if (y < height) {
    yPos = yPosConst + 2/3 * height
  }
  if (x < max/2 - min/2 + 1/3 *min){
    xPos = xPosConst
  } else if (x < max/2 + min * 1/6){
    xPos = xPosConst + 1/3 * min
  } else if (x < max/2 + min/2){
    xPos = xPosConst + 2/3 * min
  }
  drawText(player, xPos, yPos, 'black', min * 0.33);
  player == 'X' ? player = 'O' : player = 'X';
}});
//const yPos = 0 // 0, 1, 2
//const xPos = 0 // 0, 1, 2 
//drawText(player, max/2-min/2 - min*0.1 +min/6 + (min * xPos/3), min*0.1 + min/6 + min*yPos/3, 'black', min * 0.3)

