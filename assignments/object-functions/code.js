const getX = (obj) => {
  return obj.x
}
const point = (x, y) =>{
  return {x, y}
}
const emptyObject = () =>{
  return {}
}
const distance = (p1, p2) =>{
  return Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2)
}
const midpoint = (p1, p2) =>{
  return {x: ((p1.x) + (p2.x-p1.x)/2), y: ((p1.y) + (p2.y - p1.y)/2)}
}
const sumSalaries = (arr) =>{
  let acc = 0;
  for (element of arr){
    acc += element
  }
  return acc
}