const attempts = 100000000
const mode = 'power' //'sci', 'power', 'commas'(anything else will return literal value)
registerOnclick((x,y) => {
  let acc = 0;
  for (let x=0; x< attempts; x++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  acc = acc.toString()
  let sciNote = acc[0] + '.' + acc.substring(1,6) + ' · ' + '10' + '^' + (acc.length - 1)
  console.log(acc, ' // ', sciNote, '//', sciNote[sciNote.length-1] + '; from', attempts, 'attempts')
  drawText(mode == 'sci' ? sciNote : mode == 'power' ? sciNote[sciNote.length-1] :mode == 'commas'? acc.substring(acc.length-3,acc.length) + ',' + acc.substring(acc.length-6,acc.length-3) + ',' + acc.substring(acc.length-9,acc.length-6) acc,x,y,'black',25)
});