/* Quick guide! Read to understand a bit better.
(Right click -> 'Change all occurrences' on any of the things in 'quotes' to hightlight their occurences in the code.)
This program starts when you click on 
  - Start by choosing the amount of attempts every time you click.
    * Feel free to set this to any (positive) number (integer), but be careful!
    * Setting it too high will make it crash, or it will slow down heavily (30s+ wait)!
    * Due to the rounding, a low number may give a lot of 0's.
    * A recommended amount is between 10 thousand and 10 million.
  - After choosing your attempt count, you may change the 'multiplier' of the returned number.
    * This should only be used in testing or to have fun, as it will overrepresent amounts of anomalies.
    * The default 'multiplier' is 1, anything less (above 0) will result in more 'lowAnomalies', and vice versa.
  - Now you choose the mode that you would like the text to be displayed in:
    * 0; Returns the raw number
    * 1; Scientific notation, relatively straightforward. (10,000 -> 1.0 * 10^4)
    * 2; Takes the power of 10 that would be applied in 'sci'.
    * 3; Truncation, the most complicated but best looking number representation.
      ~ Similar to 'sci', in that it takes the first few digits and shows a multiplication.
      ~ However, this uses letters to show the multiplication.
      ~ A "k" represents a multiplication of a thousand, "m" of one million, "b" of a billion, and so on.
      ~ If you need more precise results, however, this may not be for you.
      ~ This method cuts off all but the first 4 digits, causing some detail to be lost.
      ~ For example, if the number returned was 2.799 million, it would express it as "2.7m"
    * 4; A straightforward representation of the average of all results.
    * 5; interjects commas where there should be one to increase legibility.
    * Anything else will default to the raw number.
  - 'logs' can be useful if you are looking for some metric in particular.
    * 'logs' stores all clicks' results in an array that can be accessed with 'logs.array' in REPL.
    * You can also find the amount of each anomaly within 'logs', along with the total number of clicks and anomalies.
  - The console log will show you the latest number (first of your mode, then natural), attempt count, and current average.
  - You should be good to go! (: Have fun tweaking the variables to see what you like best. 
*/

const attempts = 1000000
const multiplier = 1 //this should not exceed a few million or things WILL break (also breaks with negatives)
const mode = 3 // 0-5, explained in the guide
let logs = {total: 0, jackpots: 0, highAnomalies: 0, lowAnomalies: 0, anomalies: 0, array: []} 

// Notation functions
const commas = (num) =>{
  let returnString = num.toString();
  for (let x = 4 - (4-num.length % 3); x< num.length; x+= 3){
    returnString = returnString.substring(0,x*4/3) + ',' + returnString.substring(x*4/3)
  }
  if (returnString[0] == ',') returnString = returnString.substring(1)
  return returnString;
}
const sciNote = (acc) => {
 return Math.trunc(acc/10*Math.ceil(Math.log10(acc + 1))+ "x10 ^" + Math.ceil(Math.log10(num + 1)))
}
const truncate = (acc) =>{
  const accLength = Math.ceil(Math.log10(acc))
  if (accLength <4) return acc;
  const truncPower = accLength/3 <= 2 ? 'k' : accLength/3 < 3 ? 'm' : accLength/3 < 4 ? 'b' : accLength/3 < 5 ? 't' : '😵'
  return Math.round(acc/(10**(accLength-2-((accLength-1)%3)+1))) + truncPower
}
const averageResults = (array) =>{
  let avg = 0;
  for(const element of array){
    avg += element
  }
  return Math.round(avg/array.length)
}

// Mode check
const convertAccMode = (acc) =>{
  if ((mode < 1) || (mode >5)){ return acc
  } else if (mode == 1) {
    return sciNote(acc)
  } else if (mode == 2){
    return Math.ceil(Math.log10(acc))
  } else if (mode == 3){
    return truncate(acc)
  } else if (mode == 4){
    return averageResults(logs.array)
  } else if (mode == 5){
    return commas(acc.toString())
  }
}
//Check for anomaly
const checkIfAnomaly = (acc)=>{
  const accLength = Math.ceil(Math.log10(acc+1))
  if (accLength-1 >= (attempts.toString().length)) {
    logs.highAnomalies++
    logs.anomalies++
    if (accLength-2 >= (attempts.toString().length)){ 
      drawText('Jackpot with ' + convertAccMode(acc) + '!', Math.random()*width - height, Math.random()*height, 'blue', height/8)
      logs.jackpots++
      return 'blue'
    }
      return 'green'
  } else if (accLength < (attempts.toString().length-1)){
    logs.lowAnomalies++
    logs.anomalies++
    return 'red'
  } else {
    return 'black'
  }
}

registerOnclick((x,y) => {
  let acc = 0;
  for (let e=0; e < attempts; e++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l* multiplier) acc=l*multiplier;
  }
  logs.array.push(acc)
  logs.total++
  console.log(convertAccMode(acc), '/', acc, '/ from', commas(attempts.toString()), 'attempts')
  console.log('current avg:', averageResults(logs.array))
  drawText(convertAccMode(acc), x, y, checkIfAnomaly(acc),25)
});



const sudokuBoard =()=>{
  for (let editVar = 0; editVar <= 1; editVar += 1/9){
    drawLine(width/2-height/2 + height*editVar, height, width/2-height/2 + height*editVar, 0, 'grey', 2)
    drawLine(width/2-height/2, height*editVar, width/2+height/2, height*editVar, 'gray', 2)
  }
  for (let editVar = 0; editVar <= 1; editVar += 1/3){
    drawLine(width/2-height/2 + height*editVar, height, width/2-height/2 + height*editVar, 0, 'black', 4)
    drawLine(width/2-height/2, height*editVar, width/2+height/2, height*editVar, 'black', 4)
}}