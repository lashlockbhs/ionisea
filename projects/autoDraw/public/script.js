import { setCanvas, drawFilledCircle, clear, width, height, animate, now, drawLine, drawFilledRect } from './graphics.js';
setCanvas(document.getElementById('screen'));
drawFilledRect(0, 0, width, height, ' #002082')
const length = 10
const RoM = 4/3 * Math.PI
let angle = 0
let coords = { x: width / 2, y: height / 2 }
animate((t) => {
  //random
  //angle += (Math.random()-0.5) * RoM/2
  //edges of range of motion only
  angle += Math.round(Math.random() * 2 - 1) * RoM/2
  const b = Math.sin(angle) * length
  const p = Math.cos(angle) * length
  const newCoords = { x: coords.x + b, y: coords.y + p }
  drawLine(coords.x, coords.y, newCoords.x, newCoords.y, 'white')
  coords = newCoords
});
