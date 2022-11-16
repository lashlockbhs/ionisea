registerOnclick((x,y) => {
  let acc = 100000;
  for (let x=0; x< 250000000; x++){
    const l = Math.round(Math.random()/Math.random())
    if (acc<l) acc=l;
  }
  let sciNote = acc.toString()[0] + '.' + acc.toString().substring(1,6) + '*' + '10' + '^' + (acc.toString().length - 1)
  drawText(sciNote,x,y,'black',25)
});