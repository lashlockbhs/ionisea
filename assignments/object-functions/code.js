const getX = (obj) => {
  return obj.x
}
const point = (x, y) =>{
  return {x: x, y: y}
}
const emptyObject = () =>{
  return {}
}
const distance = (p1, p2) =>{
  return Math.sqrt(Math.abs(p1.x-p2.x)**2 + Math.abs(p1.y-p2.y)**2)
}