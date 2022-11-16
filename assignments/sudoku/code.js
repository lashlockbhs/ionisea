registerOnclick((x,y) => {
  let acc = 100000;
  const attempts = 1000000
  for (let x=0; x< attempts; x++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  let sciNote = acc.toString()[0] + '.' + acc.toString().substring(1,6) + ' · ' + '10' + '^' + (acc.toString().length - 1)
  console.log(sciNote, ' // ', acc + '; from', attempts, 'attempts')
  drawText(sciNote,x,y,'black',25)
});