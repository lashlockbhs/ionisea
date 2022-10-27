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
  return string.substring(Math.floor(string.length/2), string.length), string.substring(0,string.length/2)
}