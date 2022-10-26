// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
// for me:  *  drawLine(x1, y1, x2, y2, color, lineWidth)
drawFilledRect(0, 0, width,height,'green')
const coordArray = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
]
const max = Math.max(width,height)
const min = Math.min(width,height)
for (let editVar = 0; editVar <= 1; editVar += 1/3){
  drawLine(max/2-min/2 + min*editVar, height, max/2-min/2 + min*editVar, 0, 'red', 4)
  drawLine(max/2-min/2, height*editVar, max/2+min/2, height*editVar, 'red', 4)
}
let turns = 0; 
let xPos;
let yPos;
let player = '⬜';
registerOnclick((x, y) => {
  if (turns <9){
 if (y < 1/3 * height){
    yPos = 0
  } else if (y < 2/3 * height){
    yPos = 1
  } else if (y < height) {
    yPos = 2
  } 
  if (x < max/2 - min/2 || x > max/2 + min/2){
   for (let i = 0; i<250000; i++){
    await(5600)
    //console.log (Math.random()/Math.random() + ' 🖕🤓 ' + 'click in a box') 
  }}else{
  if (x < max/2 - min/6){
    xPos = 0
  } else if (x < max/2 + min/6){
    xPos = 1
  } else if (x < max/2 + min/2){
    xPos = 2
  } 
  //y < 1/3 * height ? yPos = 0 : y < 2/3 * height ? yPos = 1 : yPos = 2;
  if (coordArray[yPos][xPos] == ''){
    coordArray[yPos][xPos].push(player)
    turns++
    console.log('turn: ' + turns, 'coords: ' ,x,y)
    drawText(player, max/2-min/2 - min*0.15 +min/6 + (min * xPos/3), min*0.11 + min/6 + min*yPos/3, 'black', min * 0.3)
    player == '⬜' ? player = '⬛' : player = '⬜';
    console.log (coordArray)
}}}});

