const pigLatin =(string)=>{
  const latin = string.search(/[aeiou]/)
  return string.substring(latin)+string.substring(0,latin)+'ay'
}
const advancedPigLatin =(string)=>{ 
  let vLoc = string.search(/[aeiou]/)
  return vLoc === 0? string.substring(0)+'way':string.substring(vLoc)+string.substring(0, vLoc)+'ay'
}