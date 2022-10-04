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
   // vertical version (outdated)
const verticalCircleLine = (radius) =>{
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
//FillBox using your optimised code
const fillBox = (radius) => {
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
  }
}
//conc circle code
const concCircles = (howManyCircles) =>{
drawFilledCircle(width/2, height/2, height/2, 'red')
for (let radius = height/4/howManyCircles; radius < height/2; radius += height/howManyCircles){
 drawCircle (width/2, height/2, radius, 'blue', height/2/howManyCircles)
}}
// again with your code, fillbox with random chance
const fillBoxRand = (pby, radius) =>{
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
// grid its good enoguh (ignored)
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

const checkerboard = (numSq, color1, color2) =>{
const shortSide = Math.min(height,width)
const longSide = Math.max(height, width)
let offset = 0;
const squareSL = shortSide/numSq // side length/size
drawFilledRect((width-height)/2, 0, shortSide, shortSide, color2)
for (let yPos = 0; yPos < height; yPos += squareSL){
  for (let xPos = (width-height)/2 + offset * squareSL; xPos < width - (width-height)/2 - squareSL/2; xPos += 2*squareSL){
    drawFilledRect(xPos, yPos, squareSL, squareSL, color1)
  }
  if (offset == 0){
    offset = 1
  } else {
    offset = 0
  }
}
}

const squareOfCircles = (radius, color) =>{
  const diameter = 2*radius
  const cNum = Math.floor(height/diameter)
  const cExtra = (height - (diameter*cNum))/2
  for(let xPos = (width - height)/2+cExtra+radius;xPos < width - ((width - height))/2-cExtra; xPos += diameter){
    drawCircle(xPos, height - cExtra - radius, radius, color)
    drawCircle (xPos, cExtra+radius, radius, color)
  }
  for(let yPos = cExtra+radius*3; yPos < height-cExtra-diameter; yPos += diameter){
    drawCircle((width-height)/2+cExtra+radius,yPos, radius, color)
    drawCircle((width-height)/2+height - cExtra - radius, yPos, radius, color)
  }
}































// calling
//circleLine(6); // defines radius
//verticalCircleLine(5); // defines radius
//alternatingCircleLine(15); //defines radius
//fillBox(5); // defines radius
//fillBoxRand(.5, 1.5); // chance of fill (0-1), radius
//concCircles(22); // amount of circles drawn
checkerboard(200, 'black', 'white'); // broken for the time being, defines number of squares on a row
//squareOfCircles(6, 'blue'); //sets radius && color