const attempts = 1000000
const mode = 'sci' //'sci', 'power', 'commas'(anything else will return literal value)
const sciNote = (acc) => {
 return (acc[0] + '.' + acc.substring(1,6) + ' · ' + '10' + '^' + (acc.length - 1)).toString
}
const commasNote = (acc) =>{

}
registerOnclick((x,y) => {
  let acc = 0;
  for (let e=0; e< attempts; e++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  acc = acc.toString()
  console.log(acc, '/ from', attempts, 'attempts')
  drawText(mode == 'sci' ? sciNote(acc) : mode == 'power' ? acc.length-1 :mode == 'commas'? commasNote(acc) : acc,x,y,'black',25)
});