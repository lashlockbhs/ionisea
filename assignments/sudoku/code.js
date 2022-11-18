const attempts = 1000000 //1 million is best - can go up to maybe 2 billion before crashing (will take about a minute at 1 billion)
const oddsIncrease = 0 // for testing only! 1 = same numbers; 10 = 10x higher numbers
const mode = 'conc' //'sci', 'power', 'conc', 'avg' (scientific notation, power in sciNote, funny, average of all results)
const logArray = [] //used for averaging or checking your overall results!
const sciNote = (acc) => {
 return (acc[0] + '.' + acc.substring(1,6) + ' · ' + '10' + '^' + (acc.length - 1)).toString()
}
const roundConcat = (acc) =>{
  if (acc.length <4) return acc;
  else if (acc.length <7) return acc.substring(0,acc.length - 3) + 'k'
  else if (acc.length <10) return acc.substring(0,acc.length - 6) + 'm'
  else return acc.substring (0, acc.length - 9) + 'b'
}
const checkIfGood = (acc)=>{
  if (acc.length-1 >= (attempts.toString().length)) {
    if (acc.length-2 >= (attempts.toString().length)){ 
      drawText('jackpot with ' + roundConcat(acc) + '!', 50, 2/3*height, 'blue', 100)
      return 'blue'
    }
    else return 'green'
  } else if (acc.length < (attempts.toString().length-1)){
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
    const l = Math.round(Math.random()/Math.random()) * oddsIncrease
    if (acc<l) acc=l;
  }
  logArray.push(acc)
  acc = acc.toString()
  console.log(roundConcat(acc), '/ from', attempts, 'attempts')
  console.log('current avg:', averageResults(logArray))
  drawText(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 : mode == 'conc' ? roundConcat(acc) : mode == 'avg' ? averageResults(logArray) : acc, x, y, checkIfGood(acc),25)
});