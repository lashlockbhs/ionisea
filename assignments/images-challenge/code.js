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


//v normal Circle line code
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
            // vertical version
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
const bigness = 150
var color = 'green'
let dist = bigness*2
while (dist < width){
  dist = dist+bigness*2
}
const center = width-dist
dist = center+bigness*2
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, bigness, color)
  dist = dist+bigness*2
}