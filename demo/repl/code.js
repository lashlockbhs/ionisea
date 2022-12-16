
let shapeCordsSquare = [
    { "xAdd": 0, "yAdd": 10 },
    { "xAdd": 10, "yAdd": 0 },
    { "xAdd": 0, "yAdd": -10 },
    { "xAdd": -10, "yAdd": 0 },
]

let trinaglesides = [
    { "xAdd": 5, "yAdd": -10 },
    { "xAdd": 5, "yAdd": 10 },
    { "xAdd": -10, "yAdd": 0},
]

const rotate = (cx, cy, x, y, angle) => {
  let radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
    ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
  return [nx, ny];
}

const vector = (angle, magnitude) => {
  return ({ angle: angle * Math.PI / 180, magnitude })
}

const add2Vectors = (a) => {
  const x1 = Math.cos(a[0].angle) * a[0].magnitude
  const x2 = Math.cos(a[1].angle) * a[1].magnitude
  const y1 = Math.sin(a[0].angle) * a[0].magnitude
  const y2 = Math.sin(a[1].angle) * a[1].magnitude
  const angle = Math.atan2(y1 + y2, x1 + x2)
  const mag = Math.sqrt((x1 + x2) ** 2 + (y1 + y2) ** 2)
  return ({ angle, magnitude: mag })
}

const vectorMultiply = (o, n) => {
  if (n >= 0) {
    return ({ angle: o.angle, magnitude: o.magnitude * n })
  } else {
    return ({ angle: o.angle + Math.PI, magnitude: o.magnitude * -n })
  }
}

const addNumVectors = (a, mode) => {
  if (mode === 'degrees') {
    const r = a.reduce((acc, x) => add2Vectors([acc, x]), vector(0, 0))
    r.angle = r.angle * 180 / Math.PI
    return r
  } else {
    return a.reduce((acc, x) => add2Vectors([acc, x]), vector(0, 0))
  }
}

const EARTH_GRAVITY = 9.8
const G = 6.6743e-11
class Shape {
  constructor(sidesCords, x, y, rotation, centerX, centerY, mass, actingForces) {
    this.sidesCords = sidesCords;
    this.mass = mass;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.centerX = this.x+centerX; //offset from x
    this.centerY = this.y+centerY; //offset from y
    //this.force = addNumVectors(actingForces);
  }

  drawShape() {
    let currX = this.x;
    let currY = this.y;

    for (let i = 0; i < this.sidesCords.length; i++) {
      let cordSetStart = rotate(this.centerX, this.centerY, currX, currY, this.rotation)
      let cordSetEnd = rotate(this.centerX, this.centerY, currX + this.sidesCords[i].xAdd, currY + this.sidesCords[i].yAdd, this.rotation)
      drawLine(cordSetStart[0], cordSetStart[1], cordSetEnd[0], cordSetEnd[1], 'black', ctx);
      currX = currX + this.sidesCords[i].xAdd;
      currY = currY + this.sidesCords[i].yAdd;
    }
  }
  getBoundOfObject() {
    let currX = 0;
    let currY = 0;
    let array = []
    let n;
    for (let i = 0; i < this.sidesCords.length; i++) {
      let rotatedSideCords = rotate(this.centerX, this.centerY, this.centerX + this.sidesCords[i].xAdd, this.centerY + this.sidesCords[i].yAdd, this.rotation)
      let numOfSidePixels = Math.floor(Math.sqrt(this.sidesCords[i].xAdd ** 2 + this.sidesCords[i].yAdd ** 2))
      let xAddperpix = (rotatedSideCords[0] - this.centerX) / numOfSidePixels
      let yAddperpix = (rotatedSideCords[1] - this.centerY) / numOfSidePixels

      for (n = 0; n < numOfSidePixels; n++) {
        array.push({ "x": this.centerX + (currX + (xAddperpix * n)), "y": this.centerY + (currY + (yAddperpix * n)) })

      }
      currX = currX + (xAddperpix * n);
      currY = currY + (yAddperpix * n);
    }
    return array;
  }

}




const gravAttraction = (o1, o2) => {
  const distance = Math.hypot(Math.abs(o1.position.x - o2.position.x), Math.abs(o1.position.y - o2.position.y))
  return (o1.mass * o2.mass * G) / distance ** 2
}

const drawPoints = (array) => {
    for (let i = 0; i < array.length; i++) {
        drawLine(array[i].x, array[i].y, array[i].x+1, array[i].y+1, "red", ctx)
    }
}

const square1 = new Shape(shapeCordsSquare, 100, 100, 1, 5, 5, 5, []);
const triangle1 = new Shape(trinaglesides, 100, 100, 1, 5, 5, 5, []);


let next = 0;
let countFrame = 0;
const drawFrame = (time) => {
  if (time > next) {

    clear();
    const squareobjectBound = square1.getBoundOfObject();
    //console.log(squareobjectBound);

    square1.drawShape();
    triangle1.drawShape();

    console.log(squareobjectBound[1].y)
    drawPoints(squareobjectBound)

    triangle1.rotation = countFrame;
    square1.rotation = countFrame;
    next += 10;
    countFrame++;
  }
}

animate(drawFrame);



