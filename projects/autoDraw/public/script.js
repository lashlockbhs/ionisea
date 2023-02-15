import { setCanvas, drawFilledCircle, clear, width, height, animate, now, drawLine, drawFilledRect, drawCircle } from './graphics.js';
setCanvas(document.getElementById('screen'));
drawFilledRect(0, 0, width, height, ' #002082')
/* rom shapes guide
 * range of motion dictates the range at which the line can "turn" each update
 * it is in radians, 90 degrees = pi radians
 * on random, it will turn some angle in the range given, clockwise or counterclockwise
 * on edges, it will only do the edges of that range
 * 
 * following informations is about edges because they look better
 * > 2 * pi will result in redundancy or breakage in the case of 360/180/0
 * pi is a perfect square, anything greater than that up to 2 pi will probably result in a triangle of some kind
 * anything less can make a shape with more sides
 * shapes:
 * 4/3 for equilateral triangles
 * 8/5 pi makes stars (:
 * pi makes squares
 * 4/5 makes pentagons
 * 2/3 makes hexagons
 * 1/2 makes octagons
 * etc
*/

const length = 10
const RoM = 0.5 * Math.PI // range of motion (radians) - read above
let angle = Math.PI
let coords = { x: width / 2, y: height / 2 }
const preDraw = (count) => {
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      angle += Math.round(Math.random() * 2 - 1) * RoM / 2
      const b = Math.sin(angle) * length
      const p = Math.cos(angle) * length
      const newCoords = { x: coords.x + b, y: coords.y + p }
      drawLine(coords.x, coords.y, newCoords.x, newCoords.y, 'white')
      coords = newCoords
    }
  }
};
preDraw(1e+6)
animate((t) => {
  //random
  //angle += (Math.random()-0.5) * RoM/2
  //edges of range of motion only
  angle += Math.round(Math.random() * 2 - 1) * RoM / 2
  const b = Math.sin(angle) * length
  const p = Math.cos(angle) * length
  const newCoords = { x: coords.x + b, y: coords.y + p }
  drawLine(coords.x, coords.y, newCoords.x, newCoords.y, 'white')
  //drawCircle(coords.x, coords.y, length, 'white') // VERY SLOW
  coords = newCoords
});
