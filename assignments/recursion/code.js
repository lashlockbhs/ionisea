const factorial = (n) => { //from slides
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const triangular = (n) => {
  if (n === 0) {
    return 0
  } else {
    return triangular(n - 1) + n
  }
}

const fibonacci = (n) => {
  if (n === 1) {
    return 1
  } else if (n === 0) {
    return 0
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

const gcd = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}

const sum = (ns) => { // You left this in the slides!
  if (ns.length === 0) {
    return 0;
  } else {
    return ns[0] + sum(ns.slice(1));
  }
}

const search = (arr, val) => {
  if (arr.at(-1) === val) {
    return true;
  } else if (arr.length !== 0) {
    return search(arr.slice(0, -1), val)
  } else {
    return false
  }
}

const reverseString = (string) => {
  if (string.length === 1) {
    return string
  } else {
    return reverseString(string.slice(1)) + string[0]
  }
}

const treeMap = (branch, op) =>{
  if (isLeaf(branch)){
    return op(branch)
  } else {
    return {left: treeMap(branch.left, op), right: treeMap(branch.right, op)}
  }
}

const change = (am, coins) =>{
  if (am > Math.min(coins)){            // arrows @!!1
    return change(am-coins.findLast(e => e <= amount))
  } else {
    return 1
  }
  /* // I think you need to store a value in args
  if (coins.sort((a,b) => b-a) !== coins){
    return change(am, coins.sort((a,b) => b-a))
  } else if (am !== 0) {
    const largestCoin = Math.max(...coins) // for later use
    if (am - largestCoin < 0){
      return change(am, coins.slice(0))
    } else{
      return change(am - largestCoin, coins)
    }
  }
  */
}

/*
const coins = [89, 343, 3434, 489, 20]
console.log(coins.sort((a,b) => b-a))
*/ // for testing