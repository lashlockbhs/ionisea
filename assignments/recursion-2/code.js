const add = (a, b) => {
  if (b = 0){
    return a
  } else{
    return add(a+b, b-a)
  }
}