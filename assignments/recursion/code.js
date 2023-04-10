const triangular = (n) =>{
  if (n === 0){
    return 0
  } else {
    return triangular(n - 1) + n
  }
}

const fibonacci = (n) => {
  if (n === 0){
    return 1
  } else {
    return n + fibonacci(n-1)
  }
}