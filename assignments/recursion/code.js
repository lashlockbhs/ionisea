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