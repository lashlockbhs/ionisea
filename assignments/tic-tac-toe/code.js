// for me:  *  drawLine(x1, y1, x2, y2, color, lineWidth)

const coordArray = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
]
const player1 = 'X' //will go first
const player2 = 'O'
let winner
const winSearch = (player) =>{
  for(let c = 0; c<=2; c++){
    (coordArray[c][0] == player) ? (coordArray[c][1] == player) ?(coordArray[c][2] == player) ? winner = player:0 :0 :0;
    (coordArray[0][c] == player) ? (coordArray[1][c] == player) ?(coordArray[2][c] == player) ? winner = player:0 :0 :0;
    (coordArray[0][0] == player) ? (coordArray[1][1] == player) ?(coordArray[2][2] == player) ? winner = player:0 :0 :0;
    (coordArray[2][0] == player) ? (coordArray[1][1] == player) ?(coordArray[0][2] == player) ? winner = player:0 :0 :0;

  }
  return winner
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
  }else{
  if (x < max/2 - min/6){
    xPos = 0
  } else if (x < max/2 + min/6){
    xPos = 1
  } else if (x < max/2 + min/2){
    xPos = 2
  } 
  //ill use this if you say i can
  //y < 1/3 * height ? yPos = 0 : y < 2/3 * height ? yPos = 1 : yPos = 2;
  if (coordArray[yPos][xPos] == '' && winSearch(player) == undefined){
    coordArray[yPos][xPos].push(player)
    drawText(player, max/2-min/2 - min*0.1 +min/6 + (min * xPos/3), min*0.1 + min/6 + min*yPos/3, 'black', min * 0.3)
    console.log (coordArray, 'most recent: ', xPos, yPos, winSearch(player))
    winSearch(player) == player ? drawText(player + ' wins!', width/5, height*300/480,player == player1 ? '#2596be' : '#C62828', height/2) : 0;
    player == player1 ? player = player2 : player = player1;
    turns++
    turns == 9 && winSearch(player) == undefined ? drawText('draw', width/12, height*0.8, 'purple', height): 0;
}}});

