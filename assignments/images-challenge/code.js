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


//v Circle line code
/*const bigness = 21 //just leave it at 5 or 10 please edit: it works now
let dist = bigness*2
while (dist < width){
  dist = dist+bigness*2
}const center = width-dist
dist = center+bigness*2
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, bigness, 'red')
  dist = dist+bigness*2}
*/
const bigness = 21 
let r = 'red'
let b = 'blue'
let colour = r
let dist = bigness*2
while (dist < width){
  dist = dist+bigness*2
}const center = width-dist
dist = center+bigness*2
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, bigness, colour)
  dist = dist+bigness*2
  if (colour = r){
    colour = b
  } 
  else{
    colour = r
  }}
