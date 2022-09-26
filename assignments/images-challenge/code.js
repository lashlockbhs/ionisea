/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */

    // normal Circle line code (outdated)
const circleLine = (radius) =>{
let dist = radius*2 // Start position
while (dist < width){
  dist = dist+radius*2 // First passthrough without drawing the circles to determine the space it takes up.
}
const center = width-dist // Determinining a start position that will end up with the circles centered.
dist = center+radius*2 // Again start position, this time so it will have an equal gap on either side.
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, radius, 'red') // Finally drawing the circles.
  dist = dist+radius*2
}}
//circleLine(6); // change size & spacing here

   // vertical version (outdated)
const verticalCLine = (radius) =>{
let dist = radius*2
while (dist < height){
  dist = dist+radius*2
}
const center = height-dist
dist = center+radius*2
while (dist < height){ 
  drawFilledCircle(width/2, dist-center/2, radius, 'blue')
  dist = dist+radius*2
}}
verticalCircleLine(5);
  // alternating (outdated)
const alternatingCircleLine = (radius) => {
let dist = radius*2
while (dist < width){
  dist = dist+radius*2
}
const center = width-dist
dist = center+radius*2
let color = 'blue'
while (dist < width){ 
  if (color == 'blue'){
    color = 'red'
  } else {
    color = 'blue'
  }
  drawFilledCircle(dist-center/2, height/2, radius, color)
  dist = dist+radius*2
}}
alternatingCircleLine(15);
//FillBox using your optimised code
/*const radius = 2
const diameter = 2*radius
const widthdist = Math.floor(width/diameter)*diameter
const widthextra = width-widthdist
const heightdist = Math.floor(height/diameter)*diameter
const heightextra = height-heightdist
let y = 0
while (y < height-heightextra){ 
  let x = 0
while (x < width-widthextra){ 
  drawCircle(x+radius+widthextra/2, y+radius+heightextra/2, radius, 'blue')
  x += diameter 
  }
  y += diameter
  }*/
//conc circle code

const concCircles = (howManyCircles) =>{
let clour = 'red'
for (let radius = height/4/howManyCircles; radius < height/2; radius += height/2/howManyCircles){
 drawCircle (width/2, height/2, radius, clour, height/2/howManyCircles)
 if (clour == 'blue'){
   clour = 'red'
  }else{
  clour = 'blue'
 }
}}
//concCircles(7);

// again with your code, fillbox with random chance
const fillBox = (pby) =>{
const radius = 15
const diameter = 2*radius
const widthdist = Math.floor(width/diameter)*diameter
const widthextra = width-widthdist
const heightdist = Math.floor(height/diameter)*diameter
const heightextra = height-heightdist
let y = 0
while (y < height-heightextra){ 
  let x = 0
while (x < width-widthextra){ 
  let fillOrNo = Math.random()
  if (fillOrNo > pby){
    drawCircle(x+radius+widthextra/2, y+radius+heightextra/2, radius, 'black')
   }else{
    drawFilledCircle(x+radius+widthextra/2, y+radius+heightextra/2, radius, 'black')
   }
  x += diameter 
  }
  y += diameter
}}
//fillBox(.51); //1 is 100% chance, 0.5 is 50, 0.25 is 25, etc.


// grid its good enoguh
/*
const lineDistance = 11
let lineY = 0
let lineX = 0
while (lineX < width){
  drawLine(lineX, 0 , lineX, height, 'black')
  lineX += lineDistance
}
while (lineY < height){
  drawLine (0, lineY, width, lineY, 'black')
  lineY += lineDistance
}*/

const checkerboard = (numSq) =>{
const squareSize = width/numSq
for(let y = (height-width)/2;y < height-(height-width)/2; y+= squareSize){ 
  let colour = 'blue'
for(let x = 0; x < width; x+=squareSize){ 
  drawFilledRect(x, y, squareSize, squareSize, colour)
  if (colour == 'red'){
    colour = 'blue'
  } else {
    colour = 'red'
  }}
  y += squareSize
}
for(let y = (height-width)/2 + squareSize;y < height-(height-width)/2; y+= squareSize){ 
  let colour = 'red'
for(let x = 0; x < width; x+=squareSize){ 
  drawFilledRect(x, y, squareSize, squareSize, colour)
  if (colour == 'red'){
    colour = 'blue'
  } else {
    colour = 'red'
  }}
  y += squareSize
}}
//checkerboard(26); //just keep it kinda reasonable and keep it nice (no numbers that upset me) never mind i ruined the code so now it works (: (((((:


