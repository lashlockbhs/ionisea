import { animate } from './animation.js';
import graphics from './graphics.js';
//const avg = array => array.reduce((tot, e) => tot + e, 0) / array.length
const avgPoints = (array) => {
  const avgX = array.reduce((tot, e) => tot + e.x, 0) / array.length
  const avgY = array.reduce((tot, e) => tot + e.y, 0) / array.length
  return { x: avgX, y: avgY }
}
const avgArr = (arr) => {
  //const newArr = []
  //arr.forEach((e, i) => newArr.push(avgPoints([arr.slice(i - 1, i)])))
  const newArr = arr.slice(1).map((e, i) => avgPoints([e, arr[i]]))
  newArr.push(avgPoints([arr[0], arr[arr.length - 1]]))
  return newArr
}

const canvas = document.getElementById('screen');
const g = graphics(canvas);
const height = canvas.height
const width = canvas.width
let paused = false

g.drawCircle(width / 2, height / 2, height / 2, 'white', 2)

const drawShapes = (initPoints, depth) => {
  let arr = initPoints
  for (let i = 0; i < depth; i++) {
    g.drawFilledPolygon(arr, g.randColor(), 2)
    arr = avgArr(arr);
  }
}

const detectPositions = (radius, sides) => {
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
    drawShapes(coordArr, sides ** 2);
};

canvas.onclick = (e) => {
  paused = !paused
}

canvas.onmousemove = (e) => {
  if (!paused) {
    const distFromMid = Math.hypot(Math.abs(width / 2 - (e.x - (document.body.clientWidth - canvas.width) / 2)), Math.abs(height / 2 - e.y));
    const sides = Math.round((distFromMid) / 40 + 2)
    g.clear();
    detectPositions(height / 2, sides)
    g.drawText(sides, 0, height, 'white', 15)
  }
}
