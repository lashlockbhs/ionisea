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

const gcd = (a, b) =>{
  if (b === 0){
    return a
  } else{
    return gcd(b, a%b)
  }
}

const sum = (ns) => { // You left this in the slides!
  if (ns.length === 0) {
    return 0; 
  } else {
    return ns[0] + sumOfArray(ns.slice(1));
  }
}