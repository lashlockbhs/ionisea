/* ---------------------------------------------------------------- */
// Write your code here ...

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1) // correct

const fibonacci = (n) => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2) // correct

const sumSquares = (n) => n === 0 ? 0 : n ** 2 + sumSquares(n - 1) // correct

const maximum = (arr) => arr.length === 0 ? -Infinity : Math.max(arr[0], maximum(arr.slice(1))) // correct

const treeMap = (branch, op) => isLeaf(branch) ? op(branch) : // correct
  { left: treeMap(branch.left, op), right: treeMap(branch.right, op) };

const sumPrimesBelow = n => n === 0 ? n : // correct
  isPrime(n) ? n + sumPrimesBelow(n - 1) :
    sumPrimesBelow(n - 1)
  ;

// i defined a helper var, hope that's ok
const nvwls = (str) => { // correct
  if (str.length === 0) {
    return ''
  } else if (vowels.indexOf(str[0]) !== -1) { // this could be done with a bunch of booleans but its a bit of a hassle
    return nvwls(str.slice(1))
  } else return str[0] + nvwls(str.slice(1))
}

const caesar = (str, key) => str.length === 0 ? '' : rotate(str[0], key) + caesar(str.substring(1), key); // correct

const toList = (arr) => arr.length === 0 ? null : { first: arr[0], rest: toList(arr.slice(1)) }; // correct

const map = (branch, op) => branch.rest === null ? // almost
  { first: op(branch.first), rest: null }
  : { first: op(branch.first), rest: map(branch.rest, op) }
  ;

/* ---------------------------------------------------------------- */
//challenge problems

// a bit scuffed but works until 12451
const div10Not100 = (i) => {
  if (i === 0) return 0
  else {
    if ((i / 100) === Math.round(i / 100) || ((i / 10) !== Math.round(i / 10))) {
      return div10Not100(i - 1)
    } else if ((i / 10) === Math.round(i / 10)) {
      return 1 + div10Not100(i - 1)
    }
  }
}

//significantly easier without worrying about recursion
const whichDiv10Not100 = (n) => {
  let x = 0;
  while (div10Not100(x) < n) {
    x += 10;
  }
  return x;
}

const randomDiv10Not100 = 90

/* ---------------------------------------------------------------- */
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const vowels = 'aeiouAEIOU'

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

/* ---------------------------------------------------------------- */
