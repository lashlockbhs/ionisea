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
const everyOther = (string) => {
  return string[0]+string[2]+string[4]
}
const upDownLastCharacter = (string) => {
  return string[string.length-1].toUpperCase() + string[string.length-1].toLowerCase()
}
const firstName = (string) =>{
  return string.substring(0, string.indexOf(' '))
}
const lastName = (string) =>{
  return string.substring(string.indexOf(' ') + 1, string.length)
}
const concatenate = (stringA, stringB) =>{
  return stringA+stringB
}
const firstCharacter = (string) =>{
  return string[0]
}
const lastCharacter = (string) =>{
  return string[string.length-1]
}
const allButFirst = (string) => {
  return string.substring(1)
}
const firstThree = (s) => {
  return s.substring(0,3)
}