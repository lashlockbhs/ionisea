/* Quick guide! Read to understand a bit better.
(Right click -> 'Change all occurrences' on any of the things in 'quotes' to hightlight their occurences in the code.)
This program starts when you click on the canvas, 
  - Start by choosing the amount of attempts every time you click.
    * Feel free to set this to any (positive) number (integer), but be careful!
    * Setting it too high will make it crash, or it will slow down heavily (30s+ wait)!
    * Due to the rounding, a low number may give a lot of 0's.
    * A recommended amount is between 10 thousand and 10 million.
  - After choosing your attempt count, you may change the 'multiplier' of the returned number.
    * This should only be used in testing or to have fun, as it will overrepresent amounts of anomalies.
    * The default 'multiplier' is 1, anything less (above 0) will result in more 'lowAnomalies', and vice versa.
  - Now you choose the mode that you would like the text to be displayed in:
    * 0; Returns the lowest number from the attempts in raw format
    * 1; Scientific notation, relatively straightforward. (10,000 -> 1.0 * 10^4)
    * 2; Takes the amount of digits in the number.
    * 3; Truncation, the most complicated but best looking number representation.
      ~ Similar to 'sci', in that it takes the first few digits and shows a multiplication.
      ~ However, this uses letters to show the multiplication.
      ~ A "k" represents a multiplication of a thousand, "m" of one million, "b" of a billion, and so on.
      ~ If you need more precise results, however, this may not be for you.
      ~ This method cuts off all but the first 4 digits, causing some detail to be lost.
      ~ For example, if the number returned was 2.799 million, it would express it as "2.7m"
    * 4; A straightforward representation of the average of all results.
    * 5; interjects commas where there should be one to increase legibility.
    * 6; Exponential value using ...e+... format
    * Anything else will default to the raw number.
  - 'logs' can be useful if you are looking for some metric in particular.
    * 'logs' stores all clicks' results in an array that can be accessed with 'logs.array' in REPL.
    * You can also find the amount of each anomaly within 'logs', along with the total number of clicks and anomalies.
  - The console log will show you the latest number (first of your mode, then natural), attempt count, and current average.
  - You should be good to go! (: Have fun tweaking the variables to see what you like best. 
*/

const attempts = 1
const multiplier = 1 // negatives and 0 may break this depending on mode
const mode = 1 // 0-6, explained in the guide
let logs = {total: 0, jackpots: 0, highAnomalies: 0, lowAnomalies: 0, anomalies: 0, avg:0, array: []} 

// Notation functions
const commas = (num) =>{
  let numLength = Math.ceil(Math.log10(num + 1))
  let returnString = num.toString();
  for (let x = 4 - (4-numLength % 3); x< numLength; x+= 3){
    returnString = returnString.substring(0,x*4/3) + ',' + returnString.substring(x*4/3)
  }
  if (returnString[0] == ',') returnString = returnString.substring(1)
  return returnString;
}
const sciNote = (acc) => {
  const expoString = acc.toExponential().toString()
  //which of these two is better?
 return (acc/10**Math.ceil(Math.log10(acc+1))).toString().substring(0,6) + ' * 10 ^ ' + (expoString[expoString.length-2] === '+' ? '' : '-') +(Math.ceil(Math.log10(acc + 1))-1)
 //return (Math.round(acc/10**Math.ceil(Math.log10(acc/1000)))/100).toString().substring(0,5)+ ' * 10 ^ ' + (Math.ceil(Math.log10(acc + 1))-1)
}
const truncate = (acc) =>{
  const accLength = Math.ceil(Math.log10(acc))
  if (accLength <4) return acc;
  const truncPower = accLength < 7 ? 'k' : accLength < 10 ? 'm' : accLength < 13 ? 'b' : accLength/3 < 5 ? 't' : '😕'
  return Math.round(acc.toPrecision(4)) + truncPower
}
const averageResults = (array) =>{
  return Math.round(array.reduce((a, x) => a + x, 0) / array.length)
}

// Mode check
const convertAccMode = (acc, l) =>{
  if (mode == 0){
    const lstring = l.toExponential().toString()
    return lstring.substring(0,5) + lstring.substring(lstring.length-3)
  } else if (mode == 1) {
    return sciNote(acc)
  } else if (mode == 2){
    return Math.ceil(Math.log10(acc))
  } else if (mode == 3){
    return truncate(acc)
  } else if (mode == 4){
    return averageResults(logs.array)
  } else if (mode == 5){
    return commas(acc)
  } else if (mode == 6){
    return acc.toExponential()
  }else  return acc
}
//Check for anomaly
const checkIfAnomaly = (acc)=>{
  if (mode == 0) return 'black'; // i will do something about small numbers eventually
  const accLength = Math.ceil(Math.log10(acc+1))
  const attemptsLength = Math.ceil(Math.log10(attempts+1))
  if (accLength >= (attemptsLength+1)) {
    logs.highAnomalies++
    logs.anomalies++
    if (accLength >= (attemptsLength+2)){ 
      drawText('Jackpot with ' + convertAccMode(acc) + '!', Math.random()*width - height, Math.random()*height, 'blue', height/8)
      logs.jackpots++
      return 'blue'
    }
      return 'green'
  } else if (accLength < (attemptsLength-1)){
    logs.lowAnomalies++
    logs.anomalies++
    return 'red'
  } else {
    return 'black'
  }
}

registerOnclick((x,y) => {
  let acc = 0;
  let lowest = Math.random()
  for (let e=0; e < Math.abs(attempts); e++){
    const l = Math.random()/Math.random()
    if (lowest > l) lowest = l
    if (Math.abs(acc)<Math.abs(l* multiplier)) acc=l*multiplier;
    // these absolute values make negative multipliers possible
  }
  if (attempts < 100) acc = Math.round(acc)
  logs.array.push(acc)
  logs.total++;
  logs.avg = averageResults(logs.array)
  console.log(convertAccMode(acc, lowest), '/', acc, '/ from', attempts, 'attempts')
  console.log('current avg:', logs.avg, 'lowest: ' + lowest)
  drawText(convertAccMode(acc, lowest), x, y, checkIfAnomaly(acc),25)
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