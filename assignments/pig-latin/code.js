const pigLatin =(string)=>{
  const latin = string.search(/[aeiou]/)
  return string.substring(latin,string.length)+string.substring(0,latin)+'ay'
}
const advancedPigLatin =(string)=>{ 
  var vowelLoc = string.search(/[aeiou]/)
  return vowelLoc === 0? string.substring(0)+'way':string.substring(vowelLoc)+string.substring(0, vowelLoc)+'ay'
}