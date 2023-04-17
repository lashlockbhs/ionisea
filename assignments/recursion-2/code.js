const add = (a, b) => {
  if (b === 0){
    return a
  } else {
    return add(a+1, b-1)
  }
}

const multiply = (a, b) => {
  if (a === 0){
    return 0
  } else if (b === 1){
    return a
  } else {
    return multiply(a*b, b/b)
  }
}

//const dou