
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
    let currX = this.y;
    let currY = this.x;
    let array = []
    let n;
    for (let i = 0; i < this.sidesCords.length; i++) {
      let cordSetStart = rotate(this.centerX, this.centerY, currX, currY, this.rotation)
      let cordSetEnd = rotate(this.centerX, this.centerY, currX + this.sidesCords[i].xAdd, currY + this.sidesCords[i].yAdd, this.rotation);
      let numOfSidePixels = Math.round(Math.sqrt(((cordSetStart[0]-cordSetEnd[0]) ** 2) + ((cordSetStart[1]-cordSetEnd[1]) ** 2)));

      drawLine(cordSetStart[0], cordSetStart[1], cordSetEnd[0], cordSetEnd[1])
      
      let xAddPerPix = (cordSetEnd[0] - cordSetStart[0])/numOfSidePixels
      let yAddPerPix = (cordSetEnd[1] - cordSetStart[1])/numOfSidePixels

    

      for(n = 0; n<numOfSidePixels; n++){
        array.push({"x" : cordSetStart[0] + n*xAddPerPix, "y" : cordSetStart[1] + n*yAddPerPix})
      }
      
      currX = currX + this.sidesCords[i].xAdd;
      currY = currY + this.sidesCords[i].yAdd;
    }
    return array
  }
}




const gravAttraction = (o1, o2) => {
  const distance = Math.hypot(Math.abs(o1.position.x - o2.position.x), Math.abs(o1.position.y - o2.position.y))
  return (o1.mass * o2.mass * G) / distance ** 2
}

const drawPoints = (array, color) => {
    for (let i = 0; i < array.length; i++) {
        drawLine(array[i].x, array[i].y, array[i].x+1, array[i].y+1, color, ctx)
    }
}

const square1 = new Shape(shapeCordsSquare, 100, 100, 60, 5, 5, 5, []);
const triangle1 = new Shape(trinaglesides, 100, 100, 1, 5, 5, 5, []);


let next = 0;
let countFrame = 0;
let timetilupdate = 100 //10 milaseconds between each frame
const drawFrame = (time) => {
  if (time > next) {

    clear();
    const squareObjectBound = square1.getBoundOfObject();
    const triangleObjectBound = triangle1.getBoundOfObject();
    //console.log(squareobjectBound);
    

    //drawpoint function takes array of points from objectbound function
    //draws each point

    //drawpoint function is another way to draw shape but is less fast
    drawPoints(squareObjectBound, "red")
    drawPoints(triangleObjectBound, "red")

    square1.rotation = countFrame*2;
    triangle1.rotation = countFrame*2;

    next += timetilupdate;
    countFrame++;
  }
}

animate(drawFrame);


