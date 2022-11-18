/* quick guide! Read to understand a bit better.
(right click on any of these -> "Go to References" to see some of what they do)
start by choosing the amount of attempts on line 5 every time you click
  - Feel free to set this to any (positive) number (integer), but be careful!
    * Setting it too high will make it crash, and it will slow down heavily in the billions!
    * Due to the rounding, a low number may give a lot of 0's.
  - After choosing your attempt count, you may change the multiplier of the returned number.
    * This should only be used in testing or to have fun, as it will overrepresent amounts of anomalies.
    * The recommended multiplier is 1, anything less (above 0) will result in more lowAnomalies, and vice versa.
  - Now you choose the mode that you would like the text to be displayed in:
    * 'sci'; Scientific notation, relatively straightforward. (10,000 -> 1.0 * 10)
*/
const attempts = 1 //1 million or so is best - can go up to maybe 2 billion before crashing (will take about a minute at 1 billion)
const multiplier = 1 // for testing (and funny) only! 1 = same numbers; 10 = 10x higher numbers;  0.1 = 10x lower
const mode = 'trunc' //'sci', 'power', 'trunc', 'avg' (scientific notation, power in sciNote, funny, average of all results)
let logs = {total: 0, jackpots: 0, highAnomalies: 0, lowAnomalies: 0, anomalies: 0, array: []} //check your results by typing logs.(what you want here) into repl
const sciNote = (acc) => {
 return (acc[0] + '.' + acc.substring(1,6) + ' · ' + '10' + '^' + (acc.length - 1)).toString()
}
const truncate = (acc) =>{
  if (acc.length <4) return acc;
  else if (acc.length <7) return acc.substring(0,acc.length - 3) + '.' + acc[acc.length - 2] + 'k'
  else if (acc.length <10) return acc.substring(0,acc.length - 6) + '.' + acc[acc.length - 5] +'m'
  else if (acc.length <13) return acc.substring (0, acc.length - 9) + '.' + acc[acc.length - 8] +'b'
  else if (acc.length <16) return acc.substring (0, acc.length - 12) + '.' + acc[acc.length - 11] +'t'
  else if (acc.length <19) return acc.substring (0, acc.length - 15) + '.' + acc[acc.length - 14] +'Qd'
}
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
const averageResults = (array) =>{
  let avg = 0;
  for(const element of array){
    avg += element
  }
  return Math.round(avg/array.toString().length)
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
  console.log(truncate(acc), '/ from', attempts, 'attempts')
  console.log('current avg:', averageResults(logs.array))
  drawText(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 : mode == 'trunc' ? truncate(acc) : mode == 'avg' ? averageResults(logArray) : acc, x, y, checkIfGood(acc),25)
});