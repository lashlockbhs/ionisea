/* Quick guide! Read to understand a bit better.
(Right click on any of the things in 'quotes' -> "Go to References" to see some of what they do.)
start by choosing the amount of 'attempts' every time you click.
  - Feel free to set this to any (positive) number (integer), but be careful!
    * Setting it too high will make it crash, and it will slow down heavily (30s wait) in the billions!
    * Due to the rounding, a low number may give a lot of 0's.
  - After choosing your attempt count, you may change the 'multiplier' of the returned number.
    * This should only be used in testing or to have fun, as it will overrepresent amounts of anomalies.
    * The recommended 'multiplier' is 1, anything less (above 0) will result in more 'lowAnomalies', and vice versa.
  - Now you choose the mode that you would like the text to be displayed in:
    * 'sci'; Scientific notation, relatively straightforward. (10,000 -> 1.0 * 10^4)
    * 'power'; Takes the power of 10 that would be applied in 'sci'.
    * 'trunc'; Truncation, the most complicated but best looking number representation.
      ~ Similar to 'sci', in that it takes the first few digits and shows a multiplication.
      ~ However, this uses letters to show the multiplication.
      ~ A "k" represents a multiplication of a thousand, "m" of one million, "b" of a billion, and so on.
      ~ If you need more precise results, however, this may not be for you.
      ~ This method cuts off all but the first 4 digits, causing some detail to be lost.
    * 'avg'; A straightforward representation of the average of all results.
    * Anything else will default to the raw number.
  - 'logs' can be useful if you are looking for some metric in particular.
    * 'logs' stores all clicks' results in an array that can be accessed with 'logs.array' in REPL.
    * You can also find the amount of each anomaly within 'logs', along with the total number of clicks and anomalies.
  - The console log will show you the latest number (first of your mode, then natural), attempt count, and current average.
  - You should be good to go! (: Have fun tweaking the variables to see what you like best. 
? (if you'd like to know how this works, I have written it out at the bottom, but try to figure it out yourself!)
*/


const attempts = 10000000 
const multiplier = 1 //this should not exceed a few million or things WILL break (also breaks with negatives)
const mode = 'trunc' //'sci', 'power', 'trunc', 'avg', 'page.Crash()' (this will not do anything)
let logs = {total: 0, jackpots: 0, highAnomalies: 0, lowAnomalies: 0, anomalies: 0, array: []} //check your results by typing logs.(what you want here) into repl

// Notation functions
const sciNote = (acc) => {
 return (acc[0] + '.' + acc.substring(1,6) + ' · ' + '10' + '^' + (acc.length - 1)).toString()
}
const truncate = (acc) =>{
  if (acc.length <4) return acc
for (let i = 0; i< 100; i+=3){
  if (acc.length < 4 + i) return acc.substring(0, acc.length - i) + '.' + acc[acc.length - i + 1] + (i/3 == 1 ? 'k' : i/3 == 2 ? 'm' : i/3 == 3 ? 'b' : i/3 == 4 ? 't' : '😵')
}}
const averageResults = (array) =>{
  let avg = 0;
  for(const element of array){
    avg += element
  }
  return Math.round(avg/array.length)
}

//Check for anomaly
const checkIfGood = (acc)=>{
  if (acc.length-1 >= (attempts.toString().length)) {
    logs.highAnomalies++
    logs.anomalies++
    if (acc.length-2 >= (attempts.toString().length)){ 
      drawText('jackpot with ' + truncate(acc) + '!', 50, 2/3*height, 'blue', height/6)
      logs.jackpots++
      return 'blue'
    }
      return 'green'
  } else if (acc.length < (attempts.toString().length-1)){
    logs.lowAnomalies++
    logs.anomalies++
    return 'red'
  } else {
    return 'black'
  }
}


registerOnclick((x,y) => {
  let acc = 0;
  for (let e=0; e< attempts; e++){
    const l = Math.round(Math.random()/Math.random() * multiplier)
    if (acc<l) acc=l;
  }
  logs.array.push(acc)
  acc = acc.toString()
  logs.total++
  console.log(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 : mode == 'trunc' ? truncate(acc) : mode == 'avg' ? averageResults(logs.array) : acc, '/', acc, '/ from', attempts, 'attempts')
  console.log('current avg:', averageResults(logs.array))
  drawText(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 : mode == 'trunc' ? truncate(acc) : mode == 'avg' ? averageResults(logs.array) : acc, x, y, checkIfGood(acc),25)
});