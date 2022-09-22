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
/*const bigness = 21 // change size & spacing here, used bigness because size would not work
let dist = bigness*2 // Start position
while (dist < width){
  dist = dist+bigness*2 // First passthrough without drawing the circles to determine the space it takes up.
}
const center = width-dist // Determinining a start position that will end up with the circles centered.
dist = center+bigness*2 // Again start position, this time so it will have an equal gap on either side.
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, bigness, 'red') // Finally drawing the circles.
  dist = dist+bigness*2
}*/
   // vertical version (outdated)
/*const bigness = 12
let dist = bigness*2
while (dist < height){
  dist = dist+bigness*2
}
const center = height-dist
dist = center+bigness*2
while (dist < height){ 
  drawFilledCircle(width/2, dist-center/2, bigness, color)
  dist = dist+bigness*2
}*/
  // alternating (outdated)
/*const bigness = 12
let dist = bigness*2
while (dist < width){
  dist = dist+bigness*2
}
const center = width-dist
dist = center+bigness*2
let color = 'blue'
while (dist < width){ 
  if (color == 'blue'){
    color = 'red'
  } else {
    color = 'blue'
  }
  drawFilledCircle(dist-center/2, height/2, bigness, color)
  dist = dist+bigness*2
}*/
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
const howManyCircles=width/3
const concCircles = (howManyCircles) =>{
let clour = 'red'
for (let radius = width/4/howManyCircles; radius < width/2; radius += width/2/howManyCircles){
 drawCircle (width/2, height/2, radius, clour, width/2/howManyCircles)
 if (clour == 'blue'){
   clour = 'red'
  }else{
  clour = 'blue'
 }
}}
  //concCircles(howManyCircles);

// again with your code, fillbox with random chance
/*const pby = .58 //1 is 100% chance, 0.5 is 50, 0.25 is 25, etc
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
}*/
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
const numSq = 14 //just keep it kinda reasonable (< 71, > 7)
const checkerboard = (numSq) =>{
const squareSize = width/numSq
let y = (height-width)/2
let colour = 'blue'
while (y < height-(height-width)/2){ 
  let x = 0
while (x < width){ 
  drawFilledRect(x, y, squareSize, squareSize, colour)
  x += squareSize
  if (colour == 'red'){
    colour = 'blue'
  } else {
    colour = 'red'
  }}
  if (colour == 'red'){
    colour = 'blue'
  } else {
    colour = 'red'
  }
  y += squareSize
  }
}
checkerboard(numSq);