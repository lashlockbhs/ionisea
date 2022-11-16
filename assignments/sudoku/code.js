const attempts = 1000000
const mode = 'power' //'sci', 'power', (anything else will return literal value)
registerOnclick((x,y) => {
  let acc = 0;
  for (let x=0; x< attempts; x++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  let sciNote = acc.toString()[0] + '.' + acc.toString().substring(1,6) + ' · ' + '10' + '^' + (acc.toString().length - 1)
  console.log(sciNote, ' // ', acc, '//', sciNote[sciNote.length-1] + '; from', attempts, 'attempts')
  drawText(mode == 'sci' ? sciNote : mode == 'power' ? sciNote[sciNote.length-1] : acc,x,y,'black',25)
});