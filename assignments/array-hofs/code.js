const evens = (arr) => {
  return arr.filter((e) => e % 2 === 0)
}

const odds = (arr) => {
  return arr.filter((e) => e % 2 !== 0)
}

const big = (arr) => {
  return arr.filter((e) => e > 100)
}

const names = (arr) => {
  return arr.map((e) => e.name)
}

const grades = (arr) => {
  return arr.map((e) => e.grade)
}

const pairs = (arr) => {
  return arr.map((e) => [e, e])
}

const averageGrade = (arr) => {
  return grades(arr).reduce((acc, e) => acc + e, 0) / arr.length
}

const flatpairs = (arr) => {
  return arr.flatMap((e) => [e, e])
}

const allEven = (arr) => {
  return arr.every(e => e%2 === 0)
  //return odds(arr).length === 0
}

const someEven = (arr) =>{
  return arr.some(e => e%2 === 0)
  //return evens(arr).length > 0
}

const lengthOfNames = (arr) =>{
  return arr.filter((e) => e[0].toUpperCase() === e[0]).map((e) => e.length)
}