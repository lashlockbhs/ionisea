const pigLatin =(string)=>{
  const vLoc = string.search(/[aeiou]/)
  return string.substring(vLoc)+string.substring(0,vLoc)+'ay'
}
const advancedPigLatin =(string)=>{ 
  let vLoc = string.search(/[aeiou]/)
  return vLoc === 0? string+'way':string.substring(vLoc)+string.substring(0, vLoc)+'ay'
}