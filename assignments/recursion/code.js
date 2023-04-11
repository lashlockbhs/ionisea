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