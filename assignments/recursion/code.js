const triangular = (n) =>{
  if (n === 0){
    return 0
  } else {
    return triangular(n) + n
  }
}