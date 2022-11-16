registerOnclick((x,y) => {
  let acc = 1;
  for (let x=0; x< 250000000; x++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  let sciNote = acc.toString()[0] + '.' + acc.toString().substring(1) + '*' + '10' + '^' + acc.toString().length
  drawText(sciNote,x,y,'black',25)
});