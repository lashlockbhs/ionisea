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
const vector = (angle, magnitude) => {
  return ({ angle: angle * Math.PI / 180, magnitude })
}

const add2Vectors = (a) => {
  let x1 = Math.cos(a[0].angle) * a[0].magnitude
  let x2 = Math.cos(a[1].angle) * a[1].magnitude
  let y1 = Math.sin(a[0].angle) * a[0].magnitude
  let y2 = Math.sin(a[1].angle) * a[1].magnitude
  let angle = Math.atan2(y1 + y2, x1 + x2)
  let mag = Math.sqrt((x1 + x2) ** 2 + (y1 + y2) ** 2)
  return ({ angle: angle, magnitude: mag })
}

const addNumVectors = (a) => {
  let accVector = a[0]
  let array = a
  for (const element of a+1){
    accVector = add2Vectors([accVector, element])
  }
  return accVector
  //return a.reduce((acc, x) => add2Vectors([acc, x]), vector(0, 0))
}