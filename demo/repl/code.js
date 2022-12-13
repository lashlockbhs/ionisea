/*
// Warning! Do not call this function with numbers much bigger than 40 unless
// you want to kill this tab.
const fib = (n) => (n < 2 ? n : fib(n - 2) + fib(n - 1));

// This one you can safely call with as big numbers as you want though after
// MAX_FIB_N it will return Infinity.
const fib2 = (n) => {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
    if (!isFinite(a)) break;
  }
  return a;
};

const MAX_FIB_N = 1476;

const MAX_FIB = fib2(MAX_FIB_N);
*/

const rotate = (cx, cy, x, y, angle) => {
    let radians = (Math.PI / 180) * angle;
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
 constructor(sidesCords, x, y, rotation, centerX, centerY, mass, actingForces){
   this.sidesCords = sidesCords;
   this.mass = mass;
   this.x = x;
   this.y = y;
   this.rotation = rotation;
   this.centerX = centerX;
   this.centerY = centerY;
   this.force = addNumVectors(actingForces);
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
getBoundOfObject (){
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


const square1 = new shape(shapeCordsSquare, 100, 100, 10, 5, 5, 5)
const triangle1 = new shape(trinaglesides, 100, 150, 0, 5, 5, 5)

const drawFrame = (time) => {
  if (time > next) {
    
    clear();
    const objectBound = getBoundOfObject(square1)
    console.log(objectBound)

    drawPoints(objectBound)
    drawShape(square1)
    
    square1.rotation = countFrame*1;
    next += 10
    countFrame++
  }
}

animate(drawFrame)




