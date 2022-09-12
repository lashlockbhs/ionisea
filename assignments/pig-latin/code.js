const pigLatin =(string)=>{
  const latin = string.search(/[aeiou]/)
  return string.substring(latin,string.length)+string.substring(0,latin)+'ay'
}
const advancedPigLatin =(string)=>{ 
  var advlatin = string.search(/[aeiou]/)
  return advlatin === 0? string.substring(0,string.length)+'way':string.substring(advlatin, string.length)+string.substring(0, advlatin)+'ay'
}
var weiu = 3
var weiu = 62