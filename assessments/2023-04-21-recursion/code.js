////////////////////////////////////////////////////////////////
// Write your code here ...

const factorial = (n) => n === 0 ? 1 : n*factorial(n-1)

const fibonacci = (n) => n < 2 ? n : fibonacci(n-1) + fibonacci (n-2)

const sumSquares = (n) => n === 0 ? 0 : n**2 + sumSquares(n-1)

const maximum = (arr) => arr.length === 0 ? -Infinity : Math.max(arr[0], maximum(arr.slice(1)))

const treeMap = (branch, op) => {
  if (isLeaf(branch)){
    return op(branch)
  } else return {left: treeMap(branch.left, op), right: treeMap(branch.right, op)}
}

////////////////////////////////////////////////////////////////
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const mod = (n, m) => ((n % m) + m) % m;

const rotate = (char, places) => {
  const lower = char.toLowerCase();
  const i = alphabet.indexOf(lower);
  if (i === -1) {
    return char;
  } else {
    const rotated = alphabet[mod(i + places, alphabet.length)];
    return lower === char ? rotated : rotated.toUpperCase();
  }
}
