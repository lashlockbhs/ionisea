const attempts = 1000 //1 million is best - can go up to maybe 2 billion before crashing (will take about a minute at 1 billion)
const mode = 'conc' //'sci', 'power', 'conc' (anything else will return literal value)
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
  if (acc.length-1 >= (attempts.toString().length)  || (acc.length < (attempts.toString().length-1))) {
    return 'green'
  } else {
    return 'black'
  }
}
registerOnclick((x,y) => {
  let acc = 0;
  for (let e=0; e< attempts; e++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  acc = acc.toString()
  console.log(acc, '/ from', attempts, 'attempts')
  drawText(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 : mode == 'conc' ? roundConcat(acc) : acc, x, y, checkIfGood(acc),25)
});