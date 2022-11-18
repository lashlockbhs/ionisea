const attempts = 100000 //1 million is best - can go up to maybe 2 billion before crashing (will take about a minute at 1 billion)
const oddsIncrease = 1 // for testing (and funny) only! 1 = same numbers; 10 = 10x higher numbers;  0.1 = 10x lower
const mode = 'conc' //'sci', 'power', 'conc', 'avg' (scientific notation, power in sciNote, funny, average of all results)
let logs = {total: 0, jackpots: 0, highAnomalies: 0, lowAnomalies: 0, anomalies: 0, array: []} //check your results by typing logs.(what you want here) into repl
const sciNote = (acc) => {
 return (acc[0] + '.' + acc.substring(1,6) + ' · ' + '10' + '^' + (acc.length - 1)).toString()
}
const roundConcat = (acc) =>{
  if (acc.length <4) return acc;
  else if (acc.length <7) return acc.substring(0,acc.length - 3) + 'k'
  else if (acc.length <10) return acc.substring(0,acc.length - 6) + 'm'
  else if (acc.length <13) return acc.substring (0, acc.length - 9) + 'b'
  else if (acc.length <16) return acc.substring (0, acc.length - 12) + 't'
  else if (acc.length <19) return acc.substring (0, acc.length - 15) + 'Qd'
}
const checkIfGood = (acc)=>{
  if (acc.length-1 >= (attempts.toString().length)) {
    logs.highAnomalies++
    logs.anomalies++
    if (acc.length-2 >= (attempts.toString().length)){ 
      drawText('jackpot with ' + roundConcat(acc) + '!', 50, 2/3*height, 'blue', 100)
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
    const l = Math.round(Math.random()/Math.random() * oddsIncrease)
    if (acc<l) acc=l;
  }
  logs.array.push(acc)
  acc = acc.toString()
  logs.total++
  console.log(roundConcat(acc), '/ from', attempts, 'attempts')
  console.log('current avg:', averageResults(logs.array))
  drawText(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 : mode == 'conc' ? roundConcat(acc) : mode == 'avg' ? averageResults(logArray) : acc, x, y, checkIfGood(acc),25)
});