const evens = (arr) =>{
  return arr.filter((e) => e%2 === 0)
}

const odds = (arr) =>{
  return arr.filter((e) => e%2 != 0)
}

const big = (arr) =>{
  return arr.filter((e) => e> 100)
}