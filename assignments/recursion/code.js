const triangular = (n) =>{
  if (n === 0){
    return false
  } else {
    return triangular(n) + n
  }
}