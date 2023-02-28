const evens = (arr) =>{
  return arr.filter((e) => e%2 === 0)
}

const odds = (arr) =>{
  return arr.filter((e) => e%2 != 0)
}

const big = (arr) =>{
  return arr.filter((e) => e > 100)
}

const names = (arr) =>{
 return arr.map((e) => e.name)
}

const grades = (arr) =>{
 return arr.map((e) => e.grade)
}

const pairs = (arr) =>{
  return arr.map((e) => [e,e])
}

const averageGrade = (arr) =>{
  return grades(arr).reduce((acc, e) => acc + e, 0) / arr.length
}

const pairs = (arr) =>{
  return arr.flatMap((e) => [e,e])
}