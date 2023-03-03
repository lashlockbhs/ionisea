import { animate } from './animation.js';
import graphics from './graphics.js';
//const avg = array => array.reduce((tot, e) => tot + e, 0) / array.length
const randColor =() =>{
  const charList = 'ABCDEF1234567890'
  let color = '#'
  while (color.length< 7){
    color += charList[Math.round(Math.random()*15)]
  }
  return color
}
const avgPoints = (array) => {
  const avgX = array.reduce((tot, e) => tot + e.x, 0) / array.length
  const avgY = array.reduce((tot, e) => tot + e.y, 0) / array.length
  return { x: avgX, y: avgY }
}

const canvas = document.getElementById('screen');
const g = graphics(canvas);
const height = canvas.height
const width = canvas.width

g.drawCircle(width / 2, height / 2, height / 2, 'white', 2)

const postInit = (initPoints, depth) => {
  let arr = initPoints
  for (let i = 0; i < depth; i++) {
    const avgPts = []
    const colour = randColor()
    for (let i = 0; i < arr.length - 1; i++) {
      g.drawLine(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y, colour, 2)
      avgPts.push(avgPoints([arr[i], arr[i + 1]]))
    }
    g.drawLine(arr[arr.length - 1].x, arr[arr.length - 1].y, arr[0].x, arr[0].y, colour, 2)
    avgPts.push(avgPoints([arr[arr.length - 1], arr[0]]))
    console.log(arr)
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
  console.log(avgPts)
  postInit(avgPts, sides*20);
}

canvas.onmousemove = (e) => {
  const distFromMid = Math.hypot(Math.abs(width / 2 - e.x), Math.abs(height / 2 - e.y));
  const sides = Math.round((height-distFromMid)/40)
  g.clear();
  drawThing(height / 2, sides)
  //g.drawFilledCircle(width/2, height/2, 2, 'red')
}
