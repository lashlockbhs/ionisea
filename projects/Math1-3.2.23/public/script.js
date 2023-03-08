import { animate } from './animation.js';
import graphics from './graphics.js';
//const avg = array => array.reduce((tot, e) => tot + e, 0) / array.length
const randColor = () => '#' + Math.floor(Math.random() * 2 ** 24).toString(16)
const avgPoints = (array) => {
  const avgX = array.reduce((tot, e) => tot + e.x, 0) / array.length
  const avgY = array.reduce((tot, e) => tot + e.y, 0) / array.length
  return { x: avgX, y: avgY }
}

const canvas = document.getElementById('screen');
const g = graphics(canvas);
const height = canvas.height
const width = canvas.width
let paused = true
const randomizePos = true

g.drawCircle(width / 2, height / 2, height / 2, 'white', 2)

const postInit = (initPoints, depth) => {
  let arr = initPoints
  for (let i = 0; i < depth; i++) {
    const avgPts = []
    const color = randColor()
    for (let i = 0; i < arr.length - 1; i++) {
      g.drawLine(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y, color, 2)
      avgPts.push(avgPoints([arr[i], arr[i + 1]]))
    }
    g.drawLine(arr[arr.length - 1].x, arr[arr.length - 1].y, arr[0].x, arr[0].y, color, 2)
    avgPts.push(avgPoints([arr[arr.length - 1], arr[0]]))
    arr = avgPts
  }
}

const drawThing = (radius, sides) => {
  g.drawCircle(width / 2, height / 2, height / 2, 'white', 2)
  const angleAdj = 2 * Math.PI / sides
  let angle = 0
  const coordArr = []
  for (let i = 0; i < sides; i++) {
    const p = Math.sin(angle) * radius
    const b = Math.cos(angle) * radius
    coordArr.push({ x: width / 2 + b, y: height / 2 + p })
    angle += angleAdj
  }
  const colour = randColor()
  const avgPts = []
  for (let i = 0; i < coordArr.length - 1; i++) {
    g.drawLine(coordArr[i].x, coordArr[i].y, coordArr[i + 1].x, coordArr[i + 1].y, colour, 2)
    avgPts.push(avgPoints([coordArr[i], coordArr[i + 1]]))
  }
  g.drawLine(coordArr[coordArr.length - 1].x, coordArr[coordArr.length - 1].y, coordArr[0].x, coordArr[0].y, colour, 2)
  avgPts.push(avgPoints([coordArr[coordArr.length - 1], coordArr[0]]))
  postInit(avgPts, sides * 20);
}
canvas.onclick = (e) => {
  paused = !paused
}
canvas.onmousemove = (e) => {
  if (paused) {
    const distFromMid = Math.hypot(Math.abs(width / 2 - (e.x - (document.body.clientWidth - canvas.width)/2)), Math.abs(height / 2 - e.y));
    const sides = Math.round((height - distFromMid) / 40)
    g.clear();
    drawThing(height / 2, sides)
    g.drawText(sides, 0, height, 'white', 12)
    //g.drawFilledCircle(width/2, height/2, 2, 'red')
  }
}
/* broken and not great
animate(elapsed => {
  if (randomizePos && paused) {
    const postion = {x: Math.round(Math.random()*width), y: Math.round(Math.random() * height)}
    const distFromMid = Math.hypot(Math.abs(width / 2 - postion.x), Math.abs(height / 2 - postion.y));
    const sides = Math.round((height - distFromMid) / 40)
    g.clear();
    drawThing(height / 2, sides)
  }
})*/
