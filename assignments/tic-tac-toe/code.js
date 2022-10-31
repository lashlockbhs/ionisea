// for me:  *  drawLine(x1, y1, x2, y2, color, lineWidth)

const coordArray = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
]
const winSearch = (playerA, playerB) =>{
  for()

}
const max = Math.max(width,height)
const min = Math.min(width,height)
for (let editVar = 1/3; editVar < 1; editVar += 1/3){
  drawLine(max/2-min/2 + min*editVar, height, max/2-min/2 + min*editVar, 0, 'grey', 2)
  drawLine(max/2-min/2, height*editVar, max/2+min/2, height*editVar, 'gray', 2)
}
let turns = 0; 
let xPos;
let yPos;
const player1 ='X'
const player2 = 'O'
let player = player1;
registerOnclick((x, y) => {
 if (y < 1/3 * height){
    yPos = 0
  } else if (y < 2/3 * height){
    yPos = 1
  } else if (y < height) {
    yPos = 2
  } 
  if (x < max/2 - min/2 || x > max/2 + min/2){
   drawText(x>max/2-min/2?'⇦':'⇨', x-height/12, y+height/12, 'black', height/3)
   /* let ha = 0;
    let funny = 0;
   for (let i = 0; i<100000000; i++){ 
    ha = Math.random()/Math.random()
    funny < ha ? funny = ha : 0;
  }
  console.log(funny)*/
  }else{
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
    drawText(player, max/2-min/2 - min*0.1 +min/6 + (min * xPos/3), min*0.1 + min/6 + min*yPos/3, 'black', min * 0.3)
    player == player1 ? player = player2 : player = player1;
    console.log (coordArray, 'most recent: ', xPos, yPos)
}}});

