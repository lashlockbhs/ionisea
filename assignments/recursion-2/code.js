const add = (a, b) => {
  if (b === 0){
    return a
  } else {
    return add(a+b, b-b)
  }
}

const multiply = (a, b) => {
  if (b === 1){
    return a
  } else {
    return multiply(a*b, b/b)
  }
}