const findFnord = (string) =>{
  return string.search("fnord")
}
const stringContains = (string1, string2) => {
  return string1.search(string2) != -1
}
const firstAndLast = (string) =>{
  return string[0] + string[string.length -1]
}
const swapFrontAndBack = (string) => {
  return string.substring(Math.floor(string.length/2), string.length) + string.substring(0,string.length/2)
}
const simplePigLatin =(string, vIndex)=>{
  return string.substring(vIndex)+string.substring(0,vIndex)+'ay'
}
const isAllUpperCase = (string) =>{
  return string.search(/[abcdefghijklmnopqrstuvwxyz]/) == -1
}
const sameIgnoringCase = (stringA, stringB) =>{
  return stringA.toUpperCase() == stringB.toUpperCase()
}
const firstHalf = (string) => {
  return string.substring(0, Math.floor(string.length/2))
}
const secondHalf = (string) =>{
  return string.substring(Math.floor(string.length/2), string.length)
}
const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase()
}